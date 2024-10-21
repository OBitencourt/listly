const TasksModel = require('../models/tasks')

// Criar uma nova task

const postTask = async (req, res) => {

    const { task /*, listId */} = req.body; // Supondo que você também quer passar o listId

    
    try {

        const newTask = new TasksModel({ task /*, listId */});
        await newTask.save();


        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao criar a task', error });
    }

};

// Obter todas as tasks

// Obter todas as tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await TasksModel.find(); // Buscar todas as tasks
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar tasks', error });
    }
};


// Editar uma task

const editTask = async (req, res) => {

    const { id } = req.params; // O ID da task que você deseja atualizar
    const { task } = req.body; // Novos dados da task
    try {
        const updatedTask = await TasksModel.findByIdAndUpdate(id, { task }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task não encontrada' });
        }
        return res.status(200).json(updatedTask);
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao atualizar a task', error });
    }

};

// Deletar uma task
const deleteTask = async (req, res) => {

    const { id } = req.params; // O ID da task que você deseja deletar
    try {
        const deletedTask = await TasksModel.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task não encontrada' });
        }
        return res.status(200).json({ message: 'Task deletada com sucesso' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar a task', error });
    }

};

module.exports = {
    postTask,
    getTasks,
    editTask,
    deleteTask,
};
