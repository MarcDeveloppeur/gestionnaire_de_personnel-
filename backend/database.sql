CREATE DATABASE gestinnaire;

CREATE TABLE user{
  userId serial primary key,
  email text,
  motDePasse text
}

CREATE TABLE collaborateur{
   collabId serial primary key,
   nom text,
   prenom text
}
