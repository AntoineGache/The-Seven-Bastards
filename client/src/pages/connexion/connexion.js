import { Cookies } from '../../Utils/Cookies';
import { 
    signIn,
    signOut
 } from '../../services/authAPI';

const btnE1 = document.querySelector('.btn');
btnE1.addEventListener('click', requeteIdentification);

// Fonction pour la connexion
// requete POST  pour verifier les credentials
function requeteIdentification() {
    var identifiant = document.getElementById("identifiant").value
    var mdp = document.getElementById("motDePasse").value
    const data = {identifiant: identifiant, mdp: mdp } 
    console.log("envoie")
    signIn(data).then(res => {
        console.log("reponse recue")
        
        if (res.status == 203) {    
            //window.location.href = '/index.html'; // redirectionnpm
            
            console.log(res.data)      
            document.cookie = `role = ${res.data.str}`
            alert('success'); // faudra voir pour les cookies ou pour les login etc
         } else if (res.status== 201) {
            alert('Identifiant incorrect.');
         }else if (res.status== 202) {
            alert('mdp incorrect.');
         }
    });
}
function affichermotdepasse() {
    var texte = document.getElementById("motDePasse").value
}