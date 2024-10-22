import { IconButton, Typography } from "@mui/material"
import { Actions, ListCard } from "./style"
import Image from "next/image"
import axios from "axios"


interface ListProps {
    title: string
    _id: string
    // tasks
}

const List = ({title,  _id}: ListProps) => {

    const handleDeleteList = (_id: string) => {
        axios.delete(`http://localhost:8080/listly/lists/${_id}`)
            .then(() => {
                console.log('Lista deletada com sucesso')
                
            })
    }


    return (
        <>
       
            <ListCard>

                <Typography
                    variant="body1"
                    component="h3"
                    sx={{ fontFamily: ' sans-serif'}}
                >
                    {title} - {_id}
                </Typography>
                <Actions>

                    <IconButton>
                        <Image 
                            src="/images/edit.svg"
                            height={20}
                            width={20}
                            alt="edit"
                        />

                    </IconButton>
                    <IconButton
                        onClick={() => handleDeleteList(_id)}
                    >
                        <Image 
                            src="/images/delete.svg"
                            height={20}
                            width={20}
                            alt="edit"
                        />

                    </IconButton>
                </Actions>

                
                
            </ListCard>
                
           
        </>
    )
}


export default List