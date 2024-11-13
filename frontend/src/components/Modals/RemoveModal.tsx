import * as React from 'react'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { StyledConfirmButton, StyledCancelButton } from './style'

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}

const ModalConfirm = ({
    open, 
    onClose, 
    onConfirm,
    title,
    message
}:ModalProps) => {
  
  return (
    <React.Fragment>

      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>

        <DialogContent>

          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>

          <StyledCancelButton  onClick={onClose}>Cancelar</StyledCancelButton>
          <StyledConfirmButton  onClick={onConfirm} >
            Confirmar
          </StyledConfirmButton>
        </DialogActions>

      </Dialog>
    </React.Fragment>
  )
}

export default ModalConfirm