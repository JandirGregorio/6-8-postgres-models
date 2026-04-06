// controllers/petControllers.js
// These controllers are IDENTICAL whether the model is in-memory or Postgres.
// That is the point.

const Pet = require('../models/petModel');

const getAllPets = async (req, res, next) => {
  try {
    const pets = await Pet.list();
    res.json(pets);
  } catch (err) {
    next(err);
  }
};

const getPet = async (req, res, next) => {
  try {
    const pet = await Pet.find(req.params.pet_id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.json(pet);
  } catch (err) {
    next(err);
  }
};

const createPet = async (req, res, next) => {
  try {
    const { name, species } = req.body;
    const pet = await Pet.create(name, species);
    res.status(201).json(pet);
  } catch (err) {
    next(err);
  }
};

const updatePet = async (req, res, next) => {
  try {
    const { name, species } = req.body;
    const pet = await Pet.update(req.params.pet_id, name, species);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.json(pet);
  } catch (err) {
    next(err);
  }
};

const deletePet = async (req, res, next) => {
  try {
    const pet = await Pet.destroy(req.params.pet_id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.json(pet);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllPets, getPet, createPet, updatePet, deletePet };
