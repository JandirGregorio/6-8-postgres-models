// models/userModel-in-memory.js
// In-memory User model — data lives in a module-level array.
// Restart the server and all data is gone.
//
// This is the BEFORE version. See userModel.js for the Postgres swap.

let users = [
  { user_id: 1, username: 'alice', password: 'password123' },
  { user_id: 2, username: 'bob', password: 'hunter2' },
];
let nextId = 3;

// Returns all users — never exposes password
module.exports.list = () => {
  return users.map(({ user_id, username }) => ({ user_id, username }));
}

// Stores the user and returns user_id and username — never exposes password
module.exports.create = (username, password) => {
  const user = { user_id: nextId++, username, password };
  users.push(user);
  return { user_id: user.user_id, username: user.username };
};

// Returns the full user object including password — used only for login comparison
module.exports.findByUsername = (username) => {
  return users.find((u) => u.username === username) || null;
}

// Updates the user's password and returns user_id and username — never exposes password
// Returns null if user not found
module.exports.update = (user_id, password) => {
  const user = users.find((u) => u.user_id === Number(user_id));
  if (!user) return null;
  user.password = password;
  return { user_id: user.user_id, username: user.username };
};

// Deletes the user and returns user_id and username
// Returns null if user not found
module.exports.destroy = (user_id) => {
  const idx = users.findIndex((u) => u.user_id === Number(user_id));
  if (idx === -1) return null;
  const [user] = users.splice(idx, 1);
  return { user_id: user.user_id, username: user.username };
};
