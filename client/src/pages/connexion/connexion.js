import { 
    signIn,
    signOut
 } from '../../services/authAPI';

const btnE1 = document.querySelector('.btn');
btnE1.addEventListener('click', requeteIdentification);

function requeteIdentification() {

    var identifiant = document.getElementById("identifiant").value
    var mdp = document.getElementById("motDePasse").value
    console.log(mdp)
    const data = {identifiant: identifiant, mdp: mdp } 
    
    signIn(data).then(res => {
        if (res.success) {    
            //window.location.href = '/index.html'; // redirectionnpm
            alert('success'); // faudra voir pour les cookies ou pour les login etc
         } else {
             alert('Identifiant ou mot de passe incorrect.');
         }
    });
}
function affichermotdepasse() {
    var texte = document.getElementById("motDePasse").value
}