// models/petModel-memory.js
// In-memory Pet model — data lives in module-level variables.
// Restart the server and all data is gone.
//
// This is the BEFORE version. See petModel.js for the Postgres swap.

let allPets = [];
let nextId = 1;

module.exports.list = () => [...allPets];

module.exports.find = (pet_id) =>
  allPets.find((p) => p.pet_id === Number(pet_id)) || null;

module.exports.create = (name, species) => {
  const pet = { pet_id: nextId++, name, species };
  allPets.push(pet);
  return pet;
};

module.exports.update = (pet_id, name, species) => {
  const pet = allPets.find((p) => p.pet_id === Number(pet_id));
  if (!pet) return null;
  pet.name = name ?? pet.name;
  pet.species = species ?? pet.species;
  return pet;
};

module.exports.destroy = (pet_id) => {
  const idx = allPets.findIndex((p) => p.pet_id === Number(pet_id));
  if (idx === -1) return null;
  return allPets.splice(idx, 1)[0];
};
