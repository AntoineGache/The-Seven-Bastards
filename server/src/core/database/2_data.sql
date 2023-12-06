use sevenBastards;
-- Insérer des données dans la table Utilisateur
INSERT INTO utilisateur (id, nom, prenom, adresse, login, password, date_licence, club)
VALUES
    (1, 'Durand', 'Pierre', '10 Rue de l\'Artiste', 'pierre.durand', 'MotDePasse1', '2022-01-01', NULL),
    (2, 'Dupont', 'Sophie', '20 Avenue Crayon', 'sophie.dupont', 'MotDePasse2', '2022-02-01', NULL),
    (3, 'Martin', 'Thomas', '30 Boulevard Toile', 'thomas.martin', 'MotDePasse3', '2022-03-01', NULL),
    (4, 'Lefevre', 'Marie', '40 Rue des Peintres', 'marie.lefevre', 'MotDePasse4', '2022-01-15', NULL),
    (5, 'Leroy', 'Julien', '50 Avenue des Arts', 'julien.leroy', 'MotDePasse5', '2022-02-15', NULL),
    (6, 'Dufour', 'Claire', '60 Boulevard Palette', 'claire.dufour', 'MotDePasse6', '2022-03-15', NULL),
    (7, 'Garcia', 'Isabella', '70 Chemin des Créateurs', 'isabella.garcia', 'MotDePasse7', '2022-01-10', NULL),
    (8, 'Muller', 'Lucas', '80 Avenue Imagination', 'lucas.muller', 'MotDePasse8', '2022-02-20', NULL),
    (9, 'Boucher', 'Élise', '90 Rue des Inspirations', 'elise.boucher', 'MotDePasse9', '2022-03-05', NULL),
    (10, 'Renard', 'Alexandre', '100 Avenue Artiste', 'alexandre.renard', 'MotDePasse10', '2022-01-25', NULL);

-- Insérer des données dans la table Competiteur
INSERT INTO competiteur (id, date_premiere_participation)
VALUES
    (1, '2022-01-15'),
    (3, '2022-03-15'),
    (4, '2022-02-01'),
    (6, '2022-01-01'),
    (7, '2022-01-10'),
    (9, '2022-03-05'),
    (10, '2022-01-25');

-- Insérer des données dans la table President
INSERT INTO president (id)
VALUES
    (1),
    (2),
    (4),
    (5);

-- Insérer des données dans la table Administrateur
INSERT INTO administrateur (id)
VALUES
    (3);

-- Insérer des données dans la table Evaluateur
INSERT INTO evaluateur (id, specialite)
VALUES
    (4, 'Portrait'),
    (5, 'Paysage'),
    (6, 'Abstrait'),
    (7, 'Fantaisie'),
    (8, 'Numérique'),
    (9, 'Réalistique'),
    (10, 'Surréaliste');

-- Insérer des données dans la table Directeur
INSERT INTO directeur (id)
VALUES
    (1),
    (2),
    (3),
    (5),
    (9);

-- Insérer des données dans la table Club
INSERT INTO club (id, nom, adresse, ville, region, departement, telephone, nombre_adherents, directeur)
VALUES
    (1, 'Croix Blanche Dessin', '123 Rue de l\'Art', 'Paris', 'Ile-de-France', '75', '0123456789', 50, 1),
    (2, 'Palette Créative', '456 Rue des Crayons', 'Lyon', 'Auvergne-Rhône-Alpes', '69', '0987654321', 40, 2),
    (3, 'Pinceau Magique', '789 Avenue de la Toile', 'Marseille', 'Provence-Alpes-Côte d\'Azur', '13', '0123456789', 30, 3),
    (4, 'Art Expressif', '567 Rue des Peintres', 'Bordeaux', 'Nouvelle-Aquitaine', '33', '0789456123', 60, 1),
    (5, 'Rêves Artistiques', '890 Chemin des Créations', 'Toulouse', 'Occitanie', '31', '0456789012', 35, 2);

-- Insérer des données dans la table Concours
INSERT INTO concours (id, theme, description, date_debut, date_fin, etat, president)
VALUES
    (1, 'Portraits Expressifs', 'Réalisez des portraits expressifs en utilisant différentes techniques', '2022-04-01', '2022-04-15', 'en cours', 1),
    (2, 'Paysages Colorés', 'Exprimez la beauté de la nature à travers des paysages colorés', '2022-05-01', '2022-05-15', 'évalué', 2),
    (3, 'Abstractions Modernes', 'Laissez libre cours à votre créativité avec des œuvres abstraites', '2022-06-01', '2022-06-15', 'non commencé', 4),
    (4, 'Imaginaire Numérique', 'Explorez des mondes imaginaires à travers l\'art numérique', '2022-03-10', '2022-03-25', 'évalué', 4),
    (5, 'Réalistes Inspirés', 'Reproduisez des scènes réalistes inspirées de la vie quotidienne', '2022-02-05', '2022-02-20', 'en cours', 5),
    (6, 'Surréalisme Moderne', 'Créez des œuvres surréalistes avec une touche contemporaine', '2022-01-20', '2022-02-04', 'évalué', 5);

-- Insérer des données dans la table Dessin
INSERT INTO dessin (id, commentaire, classement, date_remise, lien, competiteur)
VALUES
    (1, 'Portrait expressif en noir et blanc', 5, '2022-04-10', 'lien1', 1),
    (2, 'Paysage coloré avec une touche impressionniste', 8, '2022-05-10', 'lien2', 3),
    (3, 'Abstraction libre avec des formes géométriques', NULL, NULL, 'lien3', 6),
    (4, 'Monde numérique fantastique', NULL, NULL, 'lien4', 9),
    (5, 'Scène urbaine réaliste', NULL, NULL, 'lien5', 10),
    (6, 'Rêve surréaliste contemporain', NULL, NULL, 'lien6', 7);

-- Insérer des données dans la table Evaluation
INSERT INTO evaluation (id, commentaire, note, date_evaluation, dessin, evaluateur)
VALUES
    (1, 'Belle œuvre, la capture d\'émotions est excellente', 18, '2022-04-12', 1, 4),
    (2, 'Très créatif, la palette de couleurs est magnifique', 15, '2022-05-12', 2, 5),
    (3, 'Œuvre intrigante, les formes géométriques captivent', NULL, NULL, 3, 6),
    (4, 'Imagination débordante, le monde numérique est fascinant', NULL, NULL, 4, 7),
    (5, 'Réalisme impressionnant, la scène urbaine est très bien rendue', NULL, NULL, 5, 8),
    (6, 'Surréalisme captivant, le rêve est bien exprimé', NULL, NULL, 6, 9);

-- Insérer des données dans la table Jury
INSERT INTO jury (id, concours)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6);

-- Insérer des données dans la table Membre_Jury
INSERT INTO membre_jury (evaluateur, jury)
VALUES
    (4, 1),
    (5, 2),
    (6, 1),
    (7, 4),
    (8, 5),
    (9, 6);

-- Insérer des données dans la table Participants
INSERT INTO participation (competiteur, concours, date_inscription, dessin)
VALUES
    (1, 1, CURRENT_DATE, 1),
    (3, 2, CURRENT_DATE, 2),
    (4, 1, CURRENT_DATE, 3),
    (6, 3, CURRENT_DATE, 4),
    (7, 4, CURRENT_DATE, 5),
    (9, 5, CURRENT_DATE, 6),
    (10, 6, CURRENT_DATE, NULL);

-- Mettre à jour les clés étrangères dans la table Utilisateur
UPDATE utilisateur SET club = 1 WHERE id IN (1, 4, 9);
UPDATE utilisateur SET club = 2 WHERE id IN (2, 5, 10);
UPDATE utilisateur SET club = 3 WHERE id IN (3, 6, 8);
UPDATE utilisateur SET club = 4 WHERE id = 7;