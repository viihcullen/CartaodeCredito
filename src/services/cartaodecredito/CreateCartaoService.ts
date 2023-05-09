
import prismaClient from "../../prisma";
import {hash} from 'bcryptjs';

interface CartaoRequest{
    nome: string;
    numCartao: string;
    codigodeseguranca: string;
    datadevencimento: string;
}




class CreateCartaoService{
    async execute({nome, numCartao, codigodeseguranca, datadevencimento}: CartaoRequest){
        if(!numCartao){
            throw new Error("Número do Cartão não enviado!");
        }

        const CartaoAlreadyExists = await prismaClient.cartao.findFirst({
            where:{
                numCartao:numCartao
            }
        });
        if(CartaoAlreadyExists){
            throw new Error("Cartão já cadastrado")
        }


        const cvc = await hash(codigodeseguranca, 3)

        const Cartao = await prismaClient.cartao.create({
            data:{
                nome:nome,
                numCartao: numCartao,
                codigodeseguranca: cvc,
                datadevencimento: datadevencimento

            },
            select:{
                id: true,
                nome: true,
                numCartao: true,
                codigodeseguranca: true,
                datadevencimento: true
            }
        })

        return{Cartao}
    }
}

export{CreateCartaoService}