//routes/todo.js

const controllers = require('../controllers/todo.js');

router.get('/todo/tasks',controllers.all);
router.get('/todo/tasks/:id',controllers.find);
router.put('/todo/tasks/:id',controllers.update);
router.post('/todo/tasks',controllers.create);
router.delete('/todo/tasks/:id',controllers.remove);