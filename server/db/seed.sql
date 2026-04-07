\c pets_db

DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
  owner_id SERIAL PRIMARY KEY,
  name     TEXT NOT NULL,
  email    TEXT NOT NULL UNIQUE
);

CREATE TABLE pets (
  pet_id  SERIAL PRIMARY KEY,
  name    TEXT NOT NULL,
  species TEXT NOT NULL
);

INSERT INTO owners (name, email) VALUES
  ('Ann Duong',    'ann@example.com'),
  ('Ben Spector',  'ben@example.com'),
  ('Carmen Lopez', 'carmen@example.com');

INSERT INTO pets (name, species) VALUES
  ('Khalo',  'dog'),
  ('Pascal', 'cat'),
  ('Ono',    'bird');
