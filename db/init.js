// db/init.js
// Run once before starting the server: npm run db:init

const pool = require('./pool');

const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS pets (
      pet_id   SERIAL PRIMARY KEY,
      name     TEXT   NOT NULL,
      species  TEXT   NOT NULL
    );
  `);
  console.log('Tables ready.');
  await pool.end();
};

createTables().catch((err) => {
  console.error('Error initializing tables:', err);
  process.exit(1);
});
