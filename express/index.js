const express = require('express');
const logger = require('./lib/logger');
const path = require('path');

app = express();

// Utilisation du middleware logger
app.use(logger);
// On définit le chemin vers le dossier public
app.use(express.static(path.join(__dirname, 'public')));

// On définit le chemin vers le dossier de template
app.set('views', path.join(__dirname,'views'));
// On définit le moteur de template
app.set('view engine','pug');

console.log(logger.version);

app.get('/api',(req,res)=>{
    res.json({message: 'Hi everybody'});
});

app.get('/', function (req, res) {
    console.log('Homepage');

    // Passer des paramètres
    res.render('home',{title:"Pug Life"});
});

app.listen(8000);