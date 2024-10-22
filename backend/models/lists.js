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
    tasks: [
        {
          task: { type: String, required: true },
          createdAt: { type: Date, default: Date.now }
        }
      ],
});

const ListsModel = mongoose.model('lists', ListSchema);

module.exports = ListsModel;
