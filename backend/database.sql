CREATE DATABASE gestinnaire;

CREATE TABLE user{
  user_id SERIAL PRIMARY KEY,
  identifiant TEXT NOT NULL,
  email TEXT NOT NULL,
  motDePasse TEXT NOT NULL
}

CREATE TABLE collaborateur{
   collab_id SERIAL PRIMARY KEY,
   nom TEXT NOT NULL,
   prenom TEXT NOT NULL
}
