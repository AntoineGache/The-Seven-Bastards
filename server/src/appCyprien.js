

/*
const port = 3000


const express = require('express')
const path =  require('path')
const bodyParser = require('body-parser');

const app = express()

// Middleware pour autoriser les requêtes cross-origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Autoriser tous les domaines (à ajuster en fonction de vos besoins)
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// Middleware pour analyser le corps des requêtes POST
app.use(bodyParser.urlencoded({ extended: true })); // pour traiter correctement les données provenant de formulaires HTML.
app.use(bodyParser.json()); // Cela permet à l application Express de comprendre les données envoyées en tant qu'objet JSON dans le corps des requêtes.

app.use(express.static(path.join(__dirname,'..','..','client', 'src', 'pages','connexion'))); // IMPORTANT pour definir en static le dossier ou les fichiers statiques sont

app.get("/connection.html",(req,res)=>{

    res.sendFile(path.join(__dirname,'..','..','client', 'src', 'pages', 'connexion', 'HTML', 'connection.html'))
   
})

app.get("/index.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','..','client', 'src',  'index.html'))
   
})

app.post("/connection.html", (req, res) => {
    const identifiant = req.body.identifiant;
    const mdp = req.body.mdp;
    
    // requete sql

    if (true) {
        const id = "admin"
        res.cookie("id",id)
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port,()=>{
    console.log(`connexion port ${port}`)
})

*/