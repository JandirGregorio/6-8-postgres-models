// controllers/ownerControllers.js
// These controllers are IDENTICAL whether the model is in-memory or Postgres.
// That is the point.

const ownerModel = require('../models/ownerModel-memory');

const getAllOwners = async (req, res, next) => {
  try {
    const owners = await ownerModel.list();
    res.send(owners);
  } catch (err) {
    next(err);
  }
};

const getOwner = async (req, res, next) => {
  try {
    const owner = await ownerModel.find(req.params.owner_id);
    if (!owner) return res.status(404).json({ error: 'Owner not found' });
    res.send(owner);
  } catch (err) {
    next(err);
  }
};

const createOwner = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const owner = await ownerModel.create(name, email);
    res.status(201).json(owner);
  } catch (err) {
    next(err);
  }
};

const updateOwner = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const owner = await ownerModel.update(req.params.owner_id, name, email);
    if (!owner) return res.status(404).json({ error: 'Owner not found' });
    res.send(owner);
  } catch (err) {
    next(err);
  }
};

const deleteOwner = async (req, res, next) => {
  try {
    const owner = await ownerModel.destroy(req.params.owner_id);
    if (!owner) return res.status(404).json({ error: 'Owner not found' });
    res.send(owner);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllOwners, getOwner, createOwner, updateOwner, deleteOwner };
