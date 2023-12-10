import {
    postImage
} from '../../services/depose'
import FormData from 'form-data';

var elements = ["Élément 1", "Élément 2", "Élément 3", "Élément 4", "Élément 5"]; //a remplacer et mettre
var elements2 = ["Élément1", "Élément 2", "Élément 3", "Élément 4", "Élément 5"]; //a remplacer et mettre



//remplirFormulaireJury(elements, elements2);

document.addEventListener('click', function(event) {
    if (event.target.ClassName=== 'detection') {
        depotDeFichier();
    }
    if (event.target.className === 'btn') {
        deposer();
    }
});

function deposer(){
    let selectFile = document.getElementById("fileInput").files[0]

    postImage({"file": selectFile.name}).then(res => {
        console.log(res.data)
    })
}

function depotDeFichier(){

}
