# 6-8 Postgres Models

Lecture code for [Postgres Models](https://marcylabschool.gitbook.io/marcy-lab-school-docs/mod-6-databases/8-postgres-models).

This repo demonstrates the **model swap**: swapping an in-memory `Pet` model for a Postgres-backed one without changing any controller or route code.

## Setup

```sh
# Install dependencies
npm install

# Copy the environment template and fill in your values
cp .env.template .env

# Create the database (run once)
createdb pets_db            # Mac
# sudo -u postgres createdb pets_db   # Windows/WSL

# Initialize the schema
npm run db:init

# Start the server
npm start
```

## Files

- `server.js` — Express app setup
- `db/pool.js` — connection pool
- `db/init.js` — creates tables (`npm run db:init`)
- `models/petModel-memory.js` — the in-memory Pet model (before the swap)
- `models/petModel.js` — the Postgres Pet model (after the swap)
- `controllers/petControllers.js` — controllers (unchanged between both models)
- `routes/petRouter.js` — routes (unchanged between both models)

## The Swap

To see that controllers and routes are unchanged, swap the import in `server.js`:

```js
// Before (in-memory)
const Pet = require('./models/petModel-memory');

// After (Postgres) — same interface, different internals
const Pet = require('./models/petModel');
```

Everything else stays the same.
