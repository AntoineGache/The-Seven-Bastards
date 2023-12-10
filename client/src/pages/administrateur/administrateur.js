// const mysql = require("mysql");
// function afficherConcours() {
//   const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root_password",
//     database: "sevenBastards",
//   });

//   // récupérer tous les utilisateurs
//   const sql = "SELECT * FROM concours";

//   connection.connect((err) => {
//     if (err) {
//       console.error("Erreur de connexion à la base de données : ", err);
//       return;
//     }

//     connection.query(sql, (queryError, results) => {
//       if (queryError) {
//         console.error("Erreur dans la requête SQL : ", queryError);
//         return;
//       }
//       // Affichez les résultats dans la balise avec l'ID "resultContainer"
//       const resultContainer = document.getElementById("idConcours");
//       resultContainer.innerHTML = JSON.stringify(results, null, 2);

//       // N'oubliez pas de fermer la connexion après utilisation
//       connection.end();
//     });
//   });
// }

const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 8080;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root_password",
  database: "sevenBastards",
});

app.use(express.static("public"));

app.get("/concours", (req, res) => {
  const sql = "SELECT * FROM concours";

  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Erreur dans la requête SQL : ", err);
      res.status(500).send("Erreur serveur");
      return;
    }

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

function afficherConcours() {
  fetch("/concours")
    .then((response) => response.json())
    .then((data) => {
      const resultContainer = document.getElementById("idConcours");
      resultContainer.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des données : ", error)
    );
}
function toggleButton() {
  /*chatgtp*/
  // Récupérer les références des boutons
  var showButton = document.getElementById("CreerUnConcours");
  // Vérifier l'état actuel du bouton caché
  if (showButton.style.display === "none") {
    // Afficher le bouton caché
    showButton.style.display = "block";
  } else {
    // Masquer le bouton caché
    showButton.style.display = "none";
  }
  /**/
}
