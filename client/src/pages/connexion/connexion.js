import { 
    signIn,
    signOut
 } from '../../services/authAPI';

const btnE1 = document.querySelector('.btn');
btnE1.addEventListener('click', requeteIdentification);

function requeteIdentification() {

    var identifiant = document.getElementById("identifiant").value
    var mdp = document.getElementById("motDePasse").value
    const data = {identifiant: identifiant, mdp: mdp } 
    
    signIn(data).then(res => {
        console.log(res)
    });
}
function affichermotdepasse() {
    var texte = document.getElementById("motDePasse").value
}