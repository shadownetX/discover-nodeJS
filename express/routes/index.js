//routes/index.js

const controller = require('../controllers');

app.get('/', controller.home);
app.get('/api',controller.api);