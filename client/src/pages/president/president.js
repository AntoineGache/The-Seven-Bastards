window.onload =function () {
    var elements = ["Élément 1", "Élément 2", "Élément 3", "Élément 4", "Élément 5"]; //a remplacer et mettre
    listeConcours(elements);
    remplirLabel(document.getElementById('etat'), 'ETAT!');
    remplirLabel(document.getElementById('dateD'), '00/00/0000');
    remplirLabel(document.getElementById('dateF'), '00/00/0000');
//donne de la bdd
    var donnees = [
        { nom: 'John', age: 30, ville: 'New York' },
        { nom: 'Alice', age: 25, ville: 'Paris' },
        { nom: 'Bob', age: 35, ville: 'London' }
    ];
    creerTableau(donnees);
}
document.addEventListener('click', function(even){
    if (even.target.id==='attribuer'){
        attribuer();
    }

});


function listeConcours(elements){
    var listeContainer = document.getElementById("liste-container");
    var ul = document.createElement("ul");
    for (var i = 0; i < elements.length; i++) {
        var li = document.createElement("li");
        li.textContent = elements[i];
        ul.appendChild(li);
    }
    listeContainer.appendChild(ul);

}

function remplirLabel(label, nouvelleValeur) {
    label.textContent = nouvelleValeur;
}


function creerTableau(tableauDeValeur) {

    // Créer un élément de tableau
    var tableau = document.createElement('table');
    //recuperer la taille
    var entetes = Object.keys(tableauDeValeur[0]);
    // Ajouter les lignes de données
    tableauDeValeur.forEach(function(element) {
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
function attribuer(){
    window.location.href = "../attribuer/attribuer.html";
}
