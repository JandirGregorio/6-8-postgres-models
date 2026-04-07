// models/ownerModel-memory.js
// In-memory Owner model — data lives in module-level variables.
// Restart the server and all data is gone.
//
// Your job: create ownerModel.js that exports the same functions
// but reads from and writes to the owners table in Postgres.

let allOwners = [];
let nextId = 1;

module.exports.list = () => [...allOwners];

module.exports.find = (owner_id) =>
  allOwners.find((o) => o.owner_id === Number(owner_id)) || null;

module.exports.create = (name, email) => {
  const owner = { owner_id: nextId++, name, email };
  allOwners.push(owner);
  return owner;
};

module.exports.update = (owner_id, name, email) => {
  const owner = allOwners.find((o) => o.owner_id === Number(owner_id));
  if (!owner) return null;
  owner.name = name ?? owner.name;
  owner.email = email ?? owner.email;
  return owner;
};

module.exports.destroy = (owner_id) => {
  const idx = allOwners.findIndex((o) => o.owner_id === Number(owner_id));
  if (idx === -1) return null;
  return allOwners.splice(idx, 1)[0];
};
