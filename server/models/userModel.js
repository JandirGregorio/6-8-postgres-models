// models/userModel.js
// Postgres-backed User model — same interface as userModel-in-memory.js.
// Controllers and routes are unchanged between the two versions.

const pool = require('../db/pool');

// Returns all users — never expose password
module.exports.list = async () => {
  // TODO
  const query = 'SELECT user_id, username FROM users';
  const { rows } = await pool.query(query);
  return rows;
};

// Stores the user and returns user_id and username — never expose password
module.exports.create = async (username, password) => {
  // TODO
  const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING user_id, username';
  const { rows } = await pool.query(query, [username, password]);
  return rows[0];
};

// Returns the full user object including password — used only for login comparison
// Returns null if not found
module.exports.findByUsername = async (username) => {
  // TODO
  
};

// Updates the user's password and returns user_id and username — never expose password
// Returns null if not found
module.exports.update = async (user_id, password) => {
  // TODO
};

// Deletes the user and returns user_id and username
// Returns null if not found
module.exports.destroy = async (user_id) => {
  // TODO
};
