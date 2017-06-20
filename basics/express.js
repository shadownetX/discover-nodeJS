const express = require('express');
const basicAuth = require('basic-auth-connect');

app = express();
back = express();

back.use(basicAuth('toto','0000'));

back.get('/', function (req, res) {
    res.send('Back');
});

app.get('/', function (req, res) {
    res.send('Hello Express');
});

app.use('/admin',back);

app.listen(3000);