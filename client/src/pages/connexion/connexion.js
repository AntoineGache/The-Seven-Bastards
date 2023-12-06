import { authAPI } from '../../services/authAPI';

// Fonction pour la connexion
// requete POST  pour verifier les credentials
function requeteIdentification() {
    var identifiant = document.getElementById("identifiant").value
    var mdp = document.getElementById("motDePasse").value
    const data = {identifiant: identifiant, mdp: mdp } 
    
    authAPI.signIn(data).then(res => {
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