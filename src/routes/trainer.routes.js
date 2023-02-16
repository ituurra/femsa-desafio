import { Router } from "express";
const router = Router();

import * as trainerController from '../controllers/trainer.controller'

router.get('/:userId/pokedex',trainerController.getPokedexbyId); //pregunta 2
router.patch('/:userId/capture/:pokemonId', trainerController.capturePokemon) // pregunta 3
router.patch('/:userId/saw/:pokemonId', trainerController.seePokemon) //pregunta 4

export default router;
