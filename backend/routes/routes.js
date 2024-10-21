
const router = require('express').Router()

// CONTROLLERS IMPORTS

const TasksControllers = require('../controllers/tasks')
const ListsControllers = require('../controllers/lists')

// TASKS

router.post('/tasks', TasksControllers.postTask)
router.get('/tasks/:id?', TasksControllers.getTasks)
router.delete('/tasks/:id', TasksControllers.deleteTask)
router.put('/tasks/:id', TasksControllers.editTask)

// LISTS

router.post('/lists', ListsControllers.createList);
router.get('/lists/:id?', ListsControllers.getLists); // Parâmetro opcional id
router.put('/lists/:id', ListsControllers.updateList);
router.delete('/lists/:id', ListsControllers.deleteList);


module.exports = router