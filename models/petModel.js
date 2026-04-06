// models/petModel.js
// Postgres-backed Pet model — same interface as petModel-memory.js.
// Controllers and routes are unchanged between the two versions.

const pool = require('../db/pool');

class Pet {
  static async list() {
    const result = await pool.query('SELECT * FROM pets ORDER BY pet_id');
    return result.rows;
  }

  static async find(pet_id) {
    const result = await pool.query(
      'SELECT * FROM pets WHERE pet_id = $1',
      [pet_id]
    );
    return result.rows[0] || null;
  }

  static async create(name, species) {
    const result = await pool.query(
      'INSERT INTO pets (name, species) VALUES ($1, $2) RETURNING *',
      [name, species]
    );
    return result.rows[0];
  }

  static async update(pet_id, name, species) {
    const result = await pool.query(
      `UPDATE pets
       SET name = COALESCE($1, name), species = COALESCE($2, species)
       WHERE pet_id = $3
       RETURNING *`,
      [name, species, pet_id]
    );
    return result.rows[0] || null;
  }

  static async destroy(pet_id) {
    const result = await pool.query(
      'DELETE FROM pets WHERE pet_id = $1 RETURNING *',
      [pet_id]
    );
    return result.rows[0] || null;
  }
}

module.exports = Pet;
