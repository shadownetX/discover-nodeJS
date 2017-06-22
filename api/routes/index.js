// routes/index.js

const controllers = require('../controllers');

router.get('/hello', controllers.hello);

/**
 * Chargement des routes spécialisées API
 */
require('./todo.js');
