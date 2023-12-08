#CREATE DATABASE sevenBastards;

#DROP USER 'user'@'localhost';
#CREATE USER 'user'@'localhost' IDENTIFIED BY 'root';
#GRANT ALL PRIVILEGES ON sevenBastards.* TO 'user'@'localhost' WITH GRANT OPTION;

use sevenBastards;

SET foreign_key_checks = 0;
DROP TABLE IF EXISTS administrateur;
DROP TABLE IF EXISTS directeur;
DROP TABLE IF EXISTS evaluation;
DROP TABLE IF EXISTS dessin;
DROP TABLE IF EXISTS competiteur;
DROP TABLE IF EXISTS evaluateur;
DROP TABLE IF EXISTS jury;
DROP TABLE IF EXISTS concours;
DROP TABLE IF EXISTS membre_jury;
DROP TABLE IF EXISTS participation;
DROP TABLE IF EXISTS president;
DROP TABLE IF EXISTS utilisateur;
DROP TABLE IF EXISTS club;
SET foreign_key_checks = 1;


CREATE TABLE utilisateur(
    id INTEGER PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    age INTEGER,
    adresse VARCHAR(100),
    login VARCHAR(50),
    password VARCHAR(64), #SHA256
    date_licence DATE,
    club INTEGER
);

CREATE TABLE competiteur(
    id INTEGER PRIMARY KEY,
    date_premiere_participation DATE,
    FOREIGN KEY (id) REFERENCES utilisateur(id)
);

CREATE TABLE president(
    id INTEGER PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES utilisateur(id)
);

CREATE TABLE administrateur(
    id INTEGER PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES utilisateur(id)
);

CREATE TABLE evaluateur(
    id INTEGER PRIMARY KEY,
    specialite VARCHAR(50),
    FOREIGN KEY (id) REFERENCES utilisateur(id)
);

CREATE TABLE directeur(
    id INTEGER PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES utilisateur(id)
);

CREATE TABLE club(
    id INTEGER PRIMARY KEY,
    nom VARCHAR(50),
    adresse VARCHAR(100),
    ville VARCHAR(50),
    region VARCHAR(50),
    departement VARCHAR(50),
    telephone VARCHAR(10),
    nombre_adherents INTEGER,
    directeur INTEGER,
    FOREIGN KEY (directeur) REFERENCES directeur(id)
);

CREATE TABLE concours(
    id INTEGER PRIMARY KEY,
    theme VARCHAR(100),
    description VARCHAR(500),
    date_debut DATE,
    date_fin DATE,
    etat VARCHAR(100),
    president INTEGER,
    FOREIGN KEY (president) REFERENCES president(id)
);

CREATE TABLE dessin(
    id INTEGER PRIMARY KEY,
    commentaire VARCHAR(500),
    classement INTEGER,
    date_remise DATE,
    lien VARCHAR(200),
    competiteur INTEGER,
    FOREIGN KEY (competiteur) REFERENCES competiteur(id)
);

CREATE TABLE evaluation(
    id INTEGER PRIMARY KEY,
    commentaire VARCHAR(500),
    note INTEGER,
    date_evaluation DATE,
    dessin INTEGER,
    evaluateur INTEGER,
    FOREIGN KEY (dessin) REFERENCES dessin(id),
    FOREIGN KEY (evaluateur) REFERENCES evaluateur(id)
);

CREATE TABLE jury(
    id INTEGER PRIMARY KEY,
    concours INTEGER,
    FOREIGN KEY (concours) REFERENCES concours(id)
);

CREATE TABLE membre_jury(
    evaluateur INTEGER,
    jury INTEGER,
    PRIMARY KEY(evaluateur, jury),
    FOREIGN KEY (evaluateur) REFERENCES evaluateur(id),
    FOREIGN KEY (jury) REFERENCES jury(id)
);

CREATE TABLE participation(
    competiteur INTEGER,
    concours INTEGER,
    date_inscription DATE,
    dessin INTEGER,
    PRIMARY KEY(competiteur, concours),
    FOREIGN KEY (dessin) REFERENCES dessin(id)
);

ALTER TABLE utilisateur
ADD CONSTRAINT fk_utilisateur_club
FOREIGN KEY (club) REFERENCES club(id);
