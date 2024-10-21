const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // O campo 'title' é obrigatório
    },
    createdAt: {
        type: Date,
        default: Date.now, // Data de criação padrão
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tasks', // Referência ao modelo de tarefas
    }],
});

const ListsModel = mongoose.model('lists', ListSchema);

module.exports = ListsModel;
