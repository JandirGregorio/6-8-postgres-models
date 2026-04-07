// models/petModel.js
// Postgres-backed Pet model — same interface as petModel-memory.js.
// Controllers and routes are unchanged between the two versions.

const pool = require('../db/pool');

module.exports.list = async () => {
  const { rows } = await pool.query('SELECT * FROM pets ORDER BY pet_id');
  return rows;
};

module.exports.find = async (pet_id) => {
  const { rows } = await pool.query(
    'SELECT * FROM pets WHERE pet_id = $1',
    [pet_id]
  );
  return rows[0] || null;
};

module.exports.create = async (name, species) => {
  const { rows } = await pool.query(
    'INSERT INTO pets (name, species) VALUES ($1, $2) RETURNING *',
    [name, species]
  );
  return rows[0];
};

module.exports.update = async (pet_id, name, species) => {
  const { rows } = await pool.query(
    `UPDATE pets
     SET name = COALESCE($1, name), species = COALESCE($2, species)
     WHERE pet_id = $3
     RETURNING *`,
    [name, species, pet_id]
  );
  return rows[0] || null;
};

module.exports.destroy = async (pet_id) => {
  const { rows } = await pool.query(
    'DELETE FROM pets WHERE pet_id = $1 RETURNING *',
    [pet_id]
  );
  return rows[0] || null;
};
