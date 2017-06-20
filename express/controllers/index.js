//controllers/index.js

exports.home = home;
exports.api = api;

function home(req, res) {
    console.log('Homepage');

    // Passer des paramètres
    res.render('home', { title: "Pug Life" });
}

function api(req, res) {
    res.json({ message: 'Hi everybody' });
}