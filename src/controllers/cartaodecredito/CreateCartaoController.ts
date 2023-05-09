import {Request, Response, response} from 'express';
import {CreateCartaoService} from '../../services/cartaodecredito/CreateCartaoService';

class CreateCartaoController{
    async handle(req: Request, res:Response){
        const{nome, numCartao, codigodeseguranca, datadevencimento} = req.body;

        const createCartaoService = new CreateCartaoService();
        const cartaodecredito = await createCartaoService.execute({nome,  numCartao, codigodeseguranca, datadevencimento});
      
        return res.json(cartaodecredito);
    }
}

export{CreateCartaoController}

