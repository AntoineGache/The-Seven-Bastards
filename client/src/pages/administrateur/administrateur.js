import { 
    nvConcours
 } from '../../services/adminAPI';

const btnCreerConcours = document.querySelector('.CreerUnConcours')
btnCreerConcours.addEventListener('click', createConcours)

function createConcours(){
    
    var theme = document.getElementById("theme").value
    if (theme.trim() === "") {
        alert("Veuillez saisir un thème.")
    }else{
        var description = document.getElementById("description").value
        if(description.trim() === ""){
          alert("La description doit être rempli")
        }else{
            var dateDebut = document.getElementById("dateDebut").value
            var dateFin = document.getElementById("dateFin").value
            
            if (dateDebut > dateFin){
                alert("Date de début supérieur à date de fin")
            }else{
                dateDebut = formatDate(dateDebut)
                dateFin = formatDate(dateFin)
            
                var etat = etatValeur(dateDebut,dateFin)
                var president = parseInt(document.getElementById("president").value) 

             if (isNaN(president) || president.toString().trim() === "") {
             
               alert("Le président doit être rempli par un nombre")
            }else{
                    const data={theme,description,dateDebut,dateFin,etat,president}
              
                    console.log("envoie requete")
            
                    nvConcours(data).then(res => {
                    console.log(res)
                    if (res.status == 200){
                        alert("concour crée")
                    }else{
                        alert("problème")
                    }
            })
            }
        }
        }
    }
}


function formatDate(inputDate) {
    const date = new Date(inputDate)
    const year= date.getFullYear()
    const month =(date.getMonth() + 1).toString().padStart(2, '0')
    const jour = date.getDate().toString().padStart(2, '0') 
    const formattedDate = `${year}-${month}-${jour}`
    return formattedDate
}

function etatValeur(dateDebut, dateFin) {
    var aujourdHui = new Date();
    if (aujourdHui >= new Date(dateDebut) && aujourdHui <= new Date(dateFin)) {
        return 'en cours';
    } else if (aujourdHui > new Date(dateFin)) {
        return 'évalué';
    } else {
        return 'non commencé';
    }
}


