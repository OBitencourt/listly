const ListsModel = require('../models/lists');

// Criar uma nova lista
const createList = async (req, res) => {

    try {
        const newList = new ListsModel(req.body);
        await newList.save();
        res.status(201).json(newList);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

// Obter listas (todas ou por ID)
const getLists = async (req, res) => {

    const { id }  = req.params

    try {

        let obj = id ? { _id: id } : {}
        const lists = await ListsModel.find(obj).populate('tasks'); // Usando populate para trazer as tarefas
        return res.status(200).json(lists);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar listas', error });
    }
};

// Atualizar uma lista
const updateList = async (req, res) => {

    try {
        const list = await ListsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!list) {
            return res.status(404).json({ message: 'Lista não encontrada' });
        }
        res.status(200).json(list);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

// Excluir uma lista
const deleteList = async (req, res) => {

    try {
        const list = await ListsModel.findByIdAndDelete(req.params.id);
        if (!list) {
            return res.status(404).json({ message: 'Lista não encontrada' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

module.exports = {
    createList,
    getLists,
    updateList,
    deleteList,
};
