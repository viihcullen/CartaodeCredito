import { compare } from 'bcryptjs';
import prismaClient from '../../prisma'; 
import {sign} from 'jsonwebtoken';



interface AuthRequest{
    numCartao: string;
    codigodeseguranca: string;
}



class AuthCartaoService {
    async execute({ numCartao, codigodeseguranca }: AuthRequest) {
      const cartaoCredito = await prismaClient.cartao.findFirst({
        where: {
          numCartao: numCartao,
        },
      });
  
      if (!cartaoCredito) {
        throw new Error("Cartão não cadastrado!");
      }
  
      const codigodesegurancaMatch = await compare(codigodeseguranca, cartaoCredito.codigodeseguranca
      );
  
      if (!codigodesegurancaMatch) {
        throw new Error("Código de segurança incorreto.");
      }
  
      const token = sign(
        {
          nome: cartaoCredito.nome,
          numCartao: cartaoCredito.numCartao,
        },
        process.env.JWT_SECRET,
        {
          subject: cartaoCredito.id,
          expiresIn: "59s",
        }
      );
      return {
        id: cartaoCredito.id,
        nome: cartaoCredito.nome,
        numCartao: cartaoCredito.numCartao,
        token: token,
      };
    }
  }
  
  export { AuthCartaoService };
  