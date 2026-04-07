// controllers/petControllers.js
// These controllers are IDENTICAL whether the model is in-memory or Postgres.
// That is the point.

const petModel = require('../models/petModel');

const getAllPets = async (req, res, next) => {
  try {
    const pets = await petModel.list();
    res.send(pets);
  } catch (err) {
    next(err);
  }
};

const getPet = async (req, res, next) => {
  try {
    const pet = await petModel.find(req.params.pet_id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.send(pet);
  } catch (err) {
    next(err);
  }
};

const createPet = async (req, res, next) => {
  try {
    const { name, species } = req.body;
    const pet = await petModel.create(name, species);
    res.status(201).json(pet);
  } catch (err) {
    next(err);
  }
};

const updatePet = async (req, res, next) => {
  try {
    const { name, species } = req.body;
    const pet = await petModel.update(req.params.pet_id, name, species);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.send(pet);
  } catch (err) {
    next(err);
  }
};

const deletePet = async (req, res, next) => {
  try {
    const pet = await petModel.destroy(req.params.pet_id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.send(pet);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllPets, getPet, createPet, updatePet, deletePet };
