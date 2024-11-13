import { IconButton, Typography } from "@mui/material"
import { Actions, ListCard } from "./style"
import Image from "next/image"
import {useState} from 'react'
import RemoveModal from '@/src/components/Modals/RemoveModal'


interface ListProps {
    title: string
    _id: string
    onRemove: (_id: string) => void;
    onEditList: (_id: string) => void;
    // tasks
}

const List = ({title,  _id, onRemove, onEditList}: ListProps) => {

    const [open, setOpen] = useState(false)

    const handleConfirmModal = (_id: string) => {
        onRemove(_id)
    }

    const handleToggleModal = () => {

        setOpen(!open)

    }

    const handleEditButton = (_id: string) => {
        onEditList(_id)
    }

    return (
        <>
       
            <ListCard>

                <Typography
                    variant="body1"
                    component="h3"
                    sx={{ fontFamily: 'Inria Sans'}}
                >
                    - {title}
                </Typography>
                <Actions>

                    <IconButton
                        onClick={() => handleEditButton(_id)}
                    >
                        <Image 
                            src="/images/edit.svg"
                            height={20}
                            width={20}
                            alt="edit"
                        />

                    </IconButton>
                    <IconButton
                        onClick={handleToggleModal}
                        
                    >
                        <Image 
                            src="/images/delete.svg"
                            height={20}
                            width={20}
                            alt="delete"
                        />

                    </IconButton>
                </Actions>

                <RemoveModal 
                    open={open}
                    onClose={handleToggleModal}
                    onConfirm={() => handleConfirmModal(_id)}
                    title='Excluir lista'
                    message={`Deseja realmente excluir essa lista? Essa ação será irreversível e irá deletar todas as tarefas dentro dela.`}
                />
                
                
            </ListCard>
                
           
        </>
    )
}


export default List