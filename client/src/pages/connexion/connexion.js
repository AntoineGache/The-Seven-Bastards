import { 
    signIn,
    signOut
 } from '../../services/authAPI';

const btnE1 = document.querySelector('.btnE1');
btnE1.addEventListener('click', requeteIdentification);

// Fonction pour la connexion
// requete POST  pour verifier les credentials
document.addEventListener('click', function(even){
    if (even.target.id==='valider'){
        requeteIdentification();
    }
});
function requeteIdentification() {

    alert("maman")
    var identifiant = document.getElementById("identifiant").value
    var mdp = document.getElementById("motDePasse").value
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