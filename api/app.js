const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/todo');

moment = require('moment');

app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

router = express.Router();

require(path.join(__dirname, 'routes'));

app.use(router);

app.listen(process.env.SERVER_PORT || 3000);

