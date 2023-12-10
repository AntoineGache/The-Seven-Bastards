//Récupération des données sous le format json 
fetch('http://localhost:8080')
    .then(response => response.json())
    .then(data =>{
        
    } 
        //Les données sont sensé être ici
        )
    .catch(error => console.error('Erreur lors de la récupération des données: ', error))