require('dotenv').config(); // loads environment variables from .env into process.env
const { Pool } = require('pg');

// In a local development environment, use this configuration
const devConfig = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
}

// When using a deployed production DB hosted by a platform like Render
// you will be given a connection string to use instead
const prodConfig = {
  connectionString: process.env.PG_CONNECTION_STRING
};

// If the connection string exists, use the production configuration
const config = process.env.PG_CONNECTION_STRING ? prodConfig : devConfig;

// Create the pool and export it
const pool = new Pool(config);
module.exports = pool;
