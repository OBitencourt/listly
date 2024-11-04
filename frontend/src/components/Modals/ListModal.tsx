import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { StyledButton } from '@/pages/lists/style';
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

      <StyledButton $isCancel={false} onClick={handleClickOpen}>
        Adicionar lista
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
            id="title"
            name="title"
            label="Nome da Lista"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />

        </DialogContent>

        <DialogActions>

          <StyledButton $isCancel={true} onClick={handleClose}>Cancelar</StyledButton>
          <StyledButton $isCancel={false} type="submit" onClick={handleOnAddList}>Criar Lista</StyledButton>

        </DialogActions>

      </Dialog>

    </>
  );
}


export default ListModal