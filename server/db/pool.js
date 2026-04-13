const { Pool } = require('pg');

const config = {
  host: 'localhost',
  port: 5432,
  database: 'users_db'
};

// Create the pool and export it
const pool = new Pool(config);

module.exports = pool;
