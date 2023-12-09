function toggleButton() {
    /*chatgtp*/
    // Récupérer les références des boutons
    var showButton = document.getElementById('inscription');
    // Vérifier l'état actuel du bouton caché
    if (showButton.style.display === 'none') {
        // Afficher le bouton caché
        showButton.style.display = 'block';
    } else {
        // Masquer le bouton caché
        showButton.style.display = 'none';
    }
    /**/
}