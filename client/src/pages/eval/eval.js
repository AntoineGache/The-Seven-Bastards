import API from "../../services/API";
//Récupération des données sous le format json 

export const recupConcours = async () => {
    await API.get('/eval/recupconcours')
    .then(response => {
            console.log(response);
    })
    .catch(error => console.error('Erreur lors de la récupération des données: ', error))
}

document.addEventListener("DOMContentLoaded", function(){
    recupConcours();
});


    