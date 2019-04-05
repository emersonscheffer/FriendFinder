DROP DATABASE IF EXISTS questions_db;

CREATE DATABASE questions_db;

USE questions_db;

CREATE TABLE questions (
    question VARCHAR(255) NOT NULL
);