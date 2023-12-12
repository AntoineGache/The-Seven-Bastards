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
    signIn(data).then(res => {
        if (res.status == 203) {    
            document.cookie = `role = ${res.data.str}`
            
            if(res.data.str.includes('directeur')){
                window.location.href = '../directeur/directeur.html'
            }else if(res.data.str.includes('president')){
                window.location.href = '../president/president.html'
            }else if(res.data.str.includes('administrateur')){
                window.location.href = '../president/administrateur.html'
            }else if(res.data.str.includes('competiteur')){
                window.location.href = '../depose/depose.html'
            }else{
                window.location.href = '../eval/eval.html'
            }    
               
         } else if (res.status == 201) {
            alert('Identifiant incorrect.');
         }else if (res.status == 202) {
            alert('Mot de passe incorrect.');
         }
    });
}


function affichermotdepasse() {
    var texte = document.getElementById("motDePasse").value
}