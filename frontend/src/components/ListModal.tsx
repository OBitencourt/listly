import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { StyledButton } from '@/pages/lists/style';

const ListModal = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      <StyledButton $isCancel={false} onClick={handleClickOpen}>
        Adicionar
      </StyledButton>

      <Dialog

        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
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
          />

        </DialogContent>

        <DialogActions>

          <StyledButton $isCancel={true} onClick={handleClose}>Cancelar</StyledButton>
          <StyledButton $isCancel={false} type="submit">Criar Lista</StyledButton>

        </DialogActions>

      </Dialog>

    </>
  );
}


export default ListModal