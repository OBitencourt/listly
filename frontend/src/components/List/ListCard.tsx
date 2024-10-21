import { IconButton, Typography } from "@mui/material"
import { ListCard } from "./style"
import Image from "next/image"

interface ListProps {
    title: string
    // tasks
}

const List = ({title}: ListProps) => {
    

    return (
        <>
       
            <ListCard>

                <Typography
                    variant="body1"
                    component="h3"
                    sx={{ fontFamily: ' sans-serif'}}
                >
                    {title}
                </Typography>
                <IconButton>
                    <Image 
                        src="/images/edit.svg"
                        height={20}
                        width={20}
                        alt="edit"
                    />

                </IconButton>
            </ListCard>
                
           
        </>
    )
}


export default List