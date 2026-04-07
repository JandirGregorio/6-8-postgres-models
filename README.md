# 6-8 Postgres Models

Lecture code for [Postgres Models](https://marcylabschool.gitbook.io/marcy-lab-school-docs/mod-6-databases/8-postgres-models).

This repo demonstrates the **model swap**: swapping an in-memory `Pet` model for a Postgres-backed one without changing any controller or route code.

## Setup

```sh
# cd into server
cd server

# Install dependencies
npm install

# Copy the environment template and fill in your values
cp .env.template .env

# Create the database (run once)
createdb pets_db            # Mac
# sudo -u postgres createdb pets_db   # Windows/WSL

# Initialize the schema
psql -f db/seed.sql                    # Mac
sudo -u postgres psql -f db/seed.sql   # Windows/WSL

# Start the server
npm run dev
```

## Files

- `index.js` — Express app setup
- `db/pool.js` — connection pool
- `db/seed.sql` — creates tables
- `models/petModel-memory.js` — the in-memory Pet model (before the swap)
- `models/petModel.js` — the Postgres Pet model (after the swap)
- `models/ownerModel-memory.js` — the in-memory Owner model (before the swap)
- `models/ownerModel.js` — the Postgres Owner model (TODO)
- `controllers/petControllers.js` — controllers (unchanged between both models)
- `controllers/ownerControllers.js` — controllers (unchanged between both models)

## The Swap

To see that controllers and routes are unchanged, swap the import in `server.js`:

```js
// Before (in-memory)
const Pet = require('./models/petModel-memory');

// After (Postgres) — same interface, different internals
const Pet = require('./models/petModel');
```

Everything else stays the same.
