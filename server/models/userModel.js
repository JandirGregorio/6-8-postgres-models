// models/userModel.js
// Postgres-backed User model — same interface as userModel-in-memory.js.
// Controllers and routes are unchanged between the two versions.

const pool = require('../db/pool');

// Returns all users — never expose password
module.exports.list = async () => {
  // TODO
};

// Stores the user and returns user_id and username — never expose password
module.exports.create = async (username, password) => {
  // TODO
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
