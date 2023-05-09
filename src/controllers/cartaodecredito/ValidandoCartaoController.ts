import { Request, Response } from "express";

class ValidandoCartaoController {
  async handle(req: Request, res: Response) {
    return res.json({ status: "Compra autorizada" });
  }
}

export { ValidandoCartaoController };
