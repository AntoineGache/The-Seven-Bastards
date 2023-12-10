function afficherConcours() {
  // Utilisez la fonction qui récupère les données depuis le serveur
  afficherConcoursID()
    .then((response) => {
      // Vérifiez le statut de la réponse
      if (response.status === 200) {
        return response.json(); // Convertissez la réponse en JSON
      } else {
        throw new Error(`Erreur de requête : ${response.statusText}`);
      }
    })

    .then((data) => {
      const resultContainer = document.getElementById("idConcours");

      // Manipulez les données pour les afficher comme vous le souhaitez
      const formattedData = formatDataForDisplay(data);

      // Affichez les données dans l'élément avec l'ID "idConcours"
      resultContainer.innerHTML = formattedData;
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des données : ", error)
    );
}

// Appel de la fonction pour afficher les concours au chargement de la page
afficherConcours();
