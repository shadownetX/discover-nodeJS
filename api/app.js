const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

moment = require('moment');

app = express();

app.use(morgan('dev'));

router = express.Router();
require(path.join(__dirname, 'routes'));

app.use(router);

app.listen(process.env.SERVER_PORT || 3000);

