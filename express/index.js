const express = require('express');
const logger = require('./lib/logger');
const path = require('path');

app = express();

app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));

console.log(logger.version);

app.get('/api',(req,res)=>{
    res.json({message: 'Hi everybody'});
});

app.get('/', function (req, res) {
    console.log('Homepage');
    res.send('<h1>Welcome</h1>');
});

app.listen(8000);