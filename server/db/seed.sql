\c users_db

DROP TABLE IF EXISTS users;

-- WARNING: storing passwords in plaintext is insecure.
-- Lesson 9 fixes this by hashing passwords with bcrypt.
CREATE TABLE users (
  user_id  SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

INSERT INTO users (username, password) VALUES
  ('alice', 'password123'),
  ('bob',   'hunter2');
