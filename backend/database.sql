CREATE DATABASE gestinnaire;

CREATE TABLE user{
  userId SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  motDePasse TEXT NOT NULL
}

CREATE TABLE collaborateur{
   collabId SERIAL PRIMARY KEY,
   nom TEXT NOT NULL,
   prenom TEXT NOT NULL
}
