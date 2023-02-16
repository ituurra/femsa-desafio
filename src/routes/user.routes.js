import { Router } from "express";
const router = Router();

import * as userController from '../controllers/user.controller'

router.post("/auth/sign-up", userController.createUser); //pregunta 1
router.post('/pokedex',userController.createPokedex) // para crear pokedex

export default router;

