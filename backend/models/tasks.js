
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true, // O campo 'task' é obrigatório
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    listId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'lists', // Referência ao model da lista
        required: true,
    },
})

const TasksModel = mongoose.model('tasks', TaskSchema)

module.exports = TasksModel