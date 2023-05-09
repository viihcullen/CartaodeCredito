import { Router} from "express";
import {CreateCartaoController} from "./controllers/cartaodecredito/CreateCartaoController";
import { AuthCartaoController } from "./controllers/cartaodecredito/AuthCartaoController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import {ValidandoCartaoController} from "./controllers/cartaodecredito/ValidandoCartaoController";


const router = Router();

router.post('/cartaodecredito', new CreateCartaoController().handle)
router.post("/session", new AuthCartaoController().handle);
router.get("/pay",isAuthenticated, new ValidandoCartaoController().handle
);

export {router};