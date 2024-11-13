import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { StyledConfirmButton, StyledCancelButton, StyledButton } from './style';

import axios from 'axios';

const ListModal = () => {

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState({
    title: ''
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const {name, value} = e.target
    setTitle({
        ...title,
        [name]: value
    })

    
  }
  console.log(title)
  const handleOnAddList = () => {
    axios.post('http://localhost:8080/listly/lists', title)
        .then(() =>{
            handleClose()
        })
  }

  return (
    <>

      <StyledButton  onClick={handleClickOpen}>
        Criar lista
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
            
            required
            margin="dense"
            id="title"
            name="title"
            label="Nome da Lista"
            type="text"
            fullWidth
            variant="filled"
            onChange={handleInputChange}
          />

        </DialogContent>

        <DialogActions>

          <StyledCancelButton onClick={handleClose}>Cancelar</StyledCancelButton>
          <StyledConfirmButton type="submit" onClick={handleOnAddList}>Criar Lista</StyledConfirmButton>

        </DialogActions>

      </Dialog>

    </>
  );
}


export default ListModal