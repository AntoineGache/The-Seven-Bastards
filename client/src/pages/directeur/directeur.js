window.onload =function () {
listeConcours();
    etat();
    dateD();
    dateF();
    creerTableau();
}
function toggleButton() {
    /*chatgtp*/
    // Récupérer les références des boutons
    var showButton = document.getElementById('inscription');
    // Vérifier l'état actuel du bouton caché
    if (showButton.style.display === 'none') {
        // Afficher le bouton caché
        showButton.style.display = 'block';
    } else {
        // Masquer le bouton caché
        showButton.style.display = 'none';
    }
    /**/
}

function listeConcours(){
    var elements = ["Élément 1", "Élément 2", "Élément 3", "Élément 4", "Élément 5"]; //a remplacer et mettre
    var listeContainer = document.getElementById("liste-container");

    var ul = document.createElement("ul");
    for (var i = 0; i < elements.length; i++) {
        var li = document.createElement("li");
        li.textContent = elements[i];
        ul.appendChild(li);
    }
    listeContainer.appendChild(ul);

}

function etat() {
    var labelEtat = document.getElementById('etat');
    var nouvelleValeur = "ETAT!";
    labelEtat.textContent = nouvelleValeur;
}
function dateD() {
    var labelEtat = document.getElementById('dateD');
    var nouvelleValeur = "00/00/0000";
    labelEtat.textContent = nouvelleValeur;
}
function dateF() {
    var date = document.getElementById('dateF');
    var nouvelleValeur = "00/00/0000";
    date.textContent = nouvelleValeur;
}
function creerTableau() {
    //donne de la bdd
    var donnees = [
        { nom: 'John', age: 30, ville: 'New York' },
        { nom: 'Alice', age: 25, ville: 'Paris' },
        { nom: 'Bob', age: 35, ville: 'London' }
    ];
    // Créer un élément de tableau
    var tableau = document.createElement('table');
    //recuperer la taille
    var entetes = Object.keys(donnees[0]);
    // Ajouter les lignes de données
    donnees.forEach(function(element) {
        var ligne = document.createElement('tr');
        entetes.forEach(function(entete) {
            var cellule = document.createElement('td');
            cellule.textContent = element[entete];
            ligne.appendChild(cellule);
        })
        tableau.appendChild(ligne);
    });
    // Ajouter le tableau
    var participant = document.getElementById('participant');
    participant.appendChild(tableau);
}

