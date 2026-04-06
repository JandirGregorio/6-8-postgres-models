require('dotenv').config();
const { Pool } = require('pg');

const pool = process.env.PG_CONNECTION_STRING
  ? new Pool({ connectionString: process.env.PG_CONNECTION_STRING })
  : new Pool({
      host:     process.env.PG_HOST     || 'localhost',
      port:     process.env.PG_PORT     || 5432,
      user:     process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
    });

module.exports = pool;
