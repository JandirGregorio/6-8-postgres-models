// models/petModel-memory.js
// In-memory Pet model — data lives in a JavaScript array.
// Restart the server and all data is gone.
//
// This is the BEFORE version. See petModel.js for the Postgres swap.

class Pet {
  static #allPets = [];
  static #nextId = 1;

  static list() {
    return [...Pet.#allPets];
  }

  static find(pet_id) {
    return Pet.#allPets.find((p) => p.pet_id === Number(pet_id)) || null;
  }

  static create(name, species) {
    const pet = { pet_id: Pet.#nextId++, name, species };
    Pet.#allPets.push(pet);
    return pet;
  }

  static update(pet_id, name, species) {
    const pet = Pet.find(pet_id);
    if (!pet) return null;
    pet.name = name ?? pet.name;
    pet.species = species ?? pet.species;
    return pet;
  }

  static destroy(pet_id) {
    const idx = Pet.#allPets.findIndex((p) => p.pet_id === Number(pet_id));
    if (idx === -1) return null;
    return Pet.#allPets.splice(idx, 1)[0];
  }
}

module.exports = Pet;
