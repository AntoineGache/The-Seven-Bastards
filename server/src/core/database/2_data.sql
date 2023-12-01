INSERT INTO utilisateur (id, nom, prenom, adresse, login, password, date_licence, club)
VALUES 
    (1, 'Dupont', 'Pierre', '1 rue de Paris', 'pdupont', 'password', '2021-01-01',1),
    (2, 'Martin', 'Luc', '2 rue de Paris', 'lucmartin', 'password', '2021-01-02',2),
    (3, 'Leclerc', 'Camille', '3 rue de Paris', 'camilleleclerc', 'password', '2021-01-03',3),
    (4, 'Moreau', 'Emma', '4 rue de Paris', 'emmamoreau', 'password', '2021-01-04',4),
    (5, 'Richard', 'Noémie', '5 rue de Paris', 'noemierichard', 'password', '2021-01-05',5),
    (6, 'Fournier', 'Alexandre', '6 rue de Paris', 'alexandrefournier', 'password', '2021-01-06',1),
    (7, 'Morel', 'Léo', '7 rue de Paris', 'leomorel', 'password', '2021-01-07',4),
    (8, 'Masson', 'Paul', '8 rue de Paris', 'paulmasson', 'password', '2021-01-08',2),
    (9, 'Rousseau', 'Gaël', '9 rue de Paris', 'gaelrousseau', 'password', '2021-01-09',4),
    (10, 'Garcia', 'Hélène', '10 rue de Paris', 'helenegarcia', 'password', '2021-01-10',5),
    (11, 'Roussel', 'Thibault', '11 rue de Paris', 'thibaultroussel', 'password', '2021-01-11',1);


INSERT INTO Administrateur (id)
SELECT id
FROM utilisateur
WHERE id = 1;

INSERT INTO competiteur(id,date_premiere_participation)
VALUES
('1','2013-07-15');

INSERT INTO president (id)
SELECT id
FROM utilisateur
WHERE id = 4;

INSERT INTO evaluateur(id)
VALUES
    (1),
    (2);



INSERT INTO directeur(id)
VALUES
    (1),
    (2),
    (3),
    (4);

INSERT INTO concours(id,theme,description,date_debut,date_fin,etat,president)
VALUES (1,"insecte","dessin sur les insectes",CURRENT_DATE,'2023-12-16',"pas commencé",'4')


INSERT INTO dessin (id, commentaire, classement, date_remise, lien, competiteur) 
VALUES ('4', 'bon dessin', '5', CURRENT_DATE(), NULL, '1');


INSERT INTO evaluation(id,commentaire,note,date_evaluation,evaluateur,dessin)
VALUES (1,"très beau dessin, très propre",18,CURRENT_DATE,'2','4')

INSERT INTO club (id,nom,adresse,ville,region,departement,telephone,nombre_adherents,directeur)
VALUES 
    (1, "Croix Rouge", "1 Rue du Pont", "01 02 03 04", 500, "Paris", "ile-de-france","ile-de-france",1),
    (2, "Croix Blanche", "2 Rue de la Croix", "02 03 04 05", 300, "Lyon", "Auvergne-Rhône-Alpes","Rhône",4),
    (3, "Croix Noire", "3 Rue du Pont Noir", "03 04 05 06", 400, "Marseille", "Provence-Alpes-Côte d\Azur","Bouches-du-Rhône",3),
    (4, "Croix Bleue", "4 Rue du Pont Bleu", "04 05 06 07", 200, "Toulouse", "Occitanie","Haute-Garonne",2),
    (5, "Croix Verte", "5 Rue du Pont Vert", "05 06 07 08", 100, "Bordeaux", "Nouvelle-Aquitaine","Gironde",1);

