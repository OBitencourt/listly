
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

    /*
    listId: {
        type: Schema.Types.ObjectId, 
        ref: 'List', // Referência ao model da lista
        required: true,
    },*/
})

const TasksModel = mongoose.model('tasks', TaskSchema)

module.exports = TasksModel