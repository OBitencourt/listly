
const router = require('express').Router()

// CONTROLLERS IMPORTS

// TASKS

router.post('tasks', TasksControllers.postTask)
router.get('/tasks/:id?', TasksControllers.getTasks)
router.delete('/tasks/:id', TasksControllers.deleteTask)
router.put('/tasks/:id', TasksControllers.editTask)

// LISTS


module.exports = router