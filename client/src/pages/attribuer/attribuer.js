import {
    getConcours,
    addCompetiteur
} from '../../services/attribuer'

var toAdd = ["Élément 1", "Élément 2", "Élément 3", "Élément 4", "Élément 5"]; //a remplacer et mettre
var added = ["Élément1", "Élément 2", "Élément 3", "Élément 4", "Élément 5"]; //a remplacer et mettre

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'P') {
        changerDeCollone(event.target);
    }
    if (event.target.id === 'attribuer') {
        attribuer();
    }
});

window.onload = remplirFormulaireJury(toAdd, added);

function attribuer(){
    window.location.href = "../president/president.html";
}


function remplirFormulaireJury(toAdd, added){

    const users = []

    var listeContainer = document.getElementById("gauche");
    var p;
    for (var i = 0; i < toAdd.length; i++) {
        p = document.createElement("p");
        p.id = i;
        p.className="g"
        p.textContent = toAdd[i];
        listeContainer.appendChild(p);

    }

    listeContainer = document.getElementById("droite");
    for (var i = 0; i < added.length; i++) {
        p = document.createElement("p");
        p.className="d"
        p.id =i;
        p.textContent = added[i];
        listeContainer.appendChild(p);
    }
}
function changerDeCollone(nomClique){
    if(nomClique.tagName==='P') {
        var listepD = document.querySelectorAll('#droite>p');
        var listepG = document.querySelectorAll('#gauche>p');
        var divG = document.getElementById('gauche');
        var divD = document.getElementById('droite');
        var p;
        var True=true;
        //creation  de p
        if(nomClique.className==="g"){
            p = document.createElement("p");
            for (var i = 0; i < listepD.length; i++) {
                if(parseInt(listepD[i].id)===i && True===true){
                    p.id =parseInt(listepD[listepD.length - 1].id)+1;
                }else{
                    p.id =i;
                    True=false;
                }
            }
            p.id.toString();
            p.className="d";
            p.textContent = nomClique.textContent;
            for (var i = 0; i < listepG.length; i++) {
                if(listepG[i]===nomClique){
                    nomClique.parentNode.removeChild(nomClique);
                }
            }
            divD.appendChild(p);

        }else if(nomClique.className==="d") {
            p = document.createElement("p");
            for (var i = 0; i < listepG.length; i++) {
                if (parseInt(listepG[i].id) === i && True === true) {
                    p.id = parseInt(listepG[listepG.length - 1].id) + 1;
                } else {
                    p.id = i;
                    True = false;
                }
            }
            p.id.toString();
            p.className = "g";
            p.textContent = nomClique.textContent;
            for (var i = 0; i < listepD.length; i++) {
                if (listepD[i] === nomClique) {
                    nomClique.parentNode.removeChild(nomClique);
                }
            }
            divG.appendChild(p);
        }
    }
}