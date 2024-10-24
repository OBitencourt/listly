

import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { StyledButton } from '@/pages/lists/style';
import axios from 'axios';


interface TaskModal {
    id: string
}

const TaskModal = ({id}: TaskModal) => {

    const [open, setOpen] = useState(false);
    const [task, setTask] = useState({
        task: '',
        listId: ''
    })
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
        const {name, value} = e.target
        
    
        setTask({
            ...task,
            [name]: value,
            listId: id
        })
    }

    console.log(task)

    const handleOnAddTask = () => {
        axios.post(`http://localhost:8080/listly/tasks/`, task)
            .then(() =>{
                handleClose()
            })
      }

    return (

        <>

            <StyledButton $isCancel={false} onClick={handleClickOpen}>
                Adicionar tarefa
            </StyledButton>

            <Dialog

                open={open}
                onClose={handleClose}
                
            >

                <DialogTitle>Adicione uma Lista</DialogTitle>

                <DialogContent>

                    <DialogContentText>
                        Para adicionar uma lista, basta digitar o nome que você deseja. Então, na página de listas, ela ficará disponível para edição.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="task"
                        name="task"
                        label="Digite uma tarefa"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                    />

                </DialogContent>

                <DialogActions>

                    <StyledButton $isCancel={true} onClick={handleClose}>Cancelar</StyledButton>
                    <StyledButton $isCancel={false} type="submit" onClick={handleOnAddTask}>Adicionar Tarefa</StyledButton>

                </DialogActions>

            </Dialog>
        
        </>
    )
}


export default TaskModal