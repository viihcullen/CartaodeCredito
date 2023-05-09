import { Request, Response } from "express";
import { AuthCartaoService } from "../../services/cartaodecredito/AuthCartaoService";

class AuthCartaoController {
  async handle(req: Request, res: Response) {
    const { numCartao, codigodeseguranca } = req.body;
    const authCartaoService = new AuthCartaoService();
    const auth = await authCartaoService.execute({
      numCartao,
      codigodeseguranca,
    });
    return res.json(auth);
  }
}

export { AuthCartaoController };
