const express = require('express');
const {
  getAllPets,
  getPet,
  createPet,
  updatePet,
  deletePet,
} = require('../controllers/petControllers');

const petRouter = express.Router();

petRouter.get('/', getAllPets);
petRouter.get('/:pet_id', getPet);
petRouter.post('/', createPet);
petRouter.patch('/:pet_id', updatePet);
petRouter.delete('/:pet_id', deletePet);

module.exports = petRouter;
