import API from "../../services/API";

function addElement(donne){
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode();
  newDiv.appendChild(newContent);

  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

export const recupConcours = async () => {
    await API.get('/eval/recupconcours')
    .then(response => {
        console.log(response);
        for (donne in response){

        }
    })
    .catch(error => console.error('Erreur lors de la récupération des données: ', error))
}

document.addEventListener("DOMContentLoaded", function(){
    recupConcours();
});