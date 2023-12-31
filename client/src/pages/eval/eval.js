import { isUtf8 } from "buffer";
import API from "../../services/API";

export const recupConcours = async () => {
    await API.get('/eval/recupconcours')
    .then(response => {
        let containerGauche = document.getElementById("listConcours")
        const list = document.createElement("ul");
        let li;
        for(let i = 0; i < response.data.length; i ++) {
            li = document.createElement("li")
            let rowcontainer = document.createElement("div") 
            let button = document.createElement("button")
            button.id = `btn${i}`;
            button.innerText = `Concours n°${i+1}`
            rowcontainer.appendChild(button)
            let evalButton = document.createElement("button")
            evalButton.id = `evalbtn${i}`;
            evalButton.innerText = "Evaluer"
            rowcontainer.appendChild(evalButton)
            li.appendChild(rowcontainer)
            list.appendChild(li)
        }
        containerGauche.appendChild(list)

        let container = document.getElementById("contenueConcours");
        const tbl = document.createElement("table");
        const tblHead = document.createElement("thead");
        const tblBody = document.createElement("tbody");
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.innerText = "Theme"
        row.appendChild(cell)
        cell = document.createElement("td");
        cell.innerText = "Description"
        row.appendChild(cell)
        cell = document.createElement("td");
        cell.innerText = "Etat"
        row.appendChild(cell)
        cell = document.createElement("td");
        cell.innerText = "Date Début"
        row.appendChild(cell)
        cell = document.createElement("td");
        cell.innerText = "Date Fin"
        row.appendChild(cell)

        tblHead.appendChild(row)

        for(let i = 0; i < response.data.length; i ++) {
            row = document.createElement("tr");
            cell = document.createElement("td");
            cell.innerText = response.data[i].theme
            row.appendChild(cell)
            cell = document.createElement("td");
            cell.innerHTML = response.data[i].description
            row.appendChild(cell)
            cell = document.createElement("td");
            cell.innerHTML = response.data[i].etat
            row.appendChild(cell)
            cell = document.createElement("td");
            cell.innerHTML = response.data[i].date_debut
            row.appendChild(cell)
            cell = document.createElement("td");
            cell.innerHTML = response.data[i].date_fin
            row.appendChild(cell)
            tblBody.appendChild(row)
        }
        tbl.appendChild(tblHead);
        tbl.appendChild(tblBody);
        container.appendChild(tbl)
    })
    .catch(error => console.error('Erreur lors de la récupération des données: ', error))
}
window.onload = recupConcours();