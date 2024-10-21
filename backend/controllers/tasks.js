const TasksModel = require('../models/tasks')
const ListsModel = require('../models/lists')

// Criar uma nova task

const postTask = async (req, res) => {
    try {
        const { task, listId } = req.body;

        // Verificação dos campos
        if (!task || !listId) {
            return res.status(400).json({ message: "Task e listId são obrigatórios." });
        }

        // Criar a nova tarefa
        const newTask = await TasksModel.create({ task, listId }); // Salvar a tarefa no banco

        // Adicionar a tarefa ao array de tarefas da lista
        await ListsModel.findByIdAndUpdate(
            listId,
            {
                $push: {
                    tasks: {
                        task: newTask.task, // Nome da tarefa
                        createdAt: newTask.createdAt // Data de criação da tarefa
                    }
                }
            },
            { new: true }
        );

        res.status(201).json(newTask); // Retorna a nova tarefa criada
    } catch (error) {
        res.status(400).json({ message: "Erro ao criar a task", error });
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
