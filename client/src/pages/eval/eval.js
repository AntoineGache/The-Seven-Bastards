import API from "./API";
//Récupération des données sous le format json 
await API.get('/eval/recupconcours')
    .then(response => {
            console.log(response);
    })
    .catch(error => console.error('Erreur lors de la récupération des données: ', error))