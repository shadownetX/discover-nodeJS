const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/todo');

moment = require('moment');

app = express();

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','POST,GET,OPTIONS,DELETE,PUT');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, COntent-Type, Accept')
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

router = express.Router();

require(path.join(__dirname, 'routes'));

app.use(router);

app.listen(process.env.SERVER_PORT || 3000);

