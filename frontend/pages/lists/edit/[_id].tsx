
import { Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledBox,  TasksWrapper } from "./style";
import TasksCard from "@/src/components/Tasks/TasksCard";
import axios from "axios";
import TaskModal from "@/src/components/Modals/TaskModal";


interface Tasks {
    _id: string
    task: string
    createdAt: string; // Data de criação da lista
}


const Edit = () => {
    const router = useRouter();
    const { _id = "" } = router.query; // Pegando o _id da URL
    console.log(_id)

    const [tasks, setTasks] = useState<Tasks[]>([])
    const [title, setTitle] = useState('')
    useEffect(() => {

        axios.get(`http://localhost:8080/listly/lists/${_id}`)
            .then(response => {
               
                const data = response.data

                const listTitle = data[0].title
                const tasks = data[0].tasks
                
                setTitle(listTitle)
                setTasks(tasks)
            })

    }, [_id]);

    console.log(tasks)

    return (
        <>

            <Container 
                maxWidth='md'
                sx={{display: 'flex'}}
                
            >
                <Grid spacing={2} container>

                    <Grid
                        item
                        md={8}
                    >
                        <StyledBox $isBig>
                            <Typography
                                variant="h5"
                                sx={{
                                    margin: 1
                                }}
                            >
                                {title}

                            </Typography>
                            <TasksWrapper>

                                {
                                    tasks.map(task => (
                                        <TasksCard 
                                            key={task._id}
                                            task={task.task}
                                        />
                                    ))
                                }

                            </TasksWrapper>

                            

                            <TaskModal id={_id as string}/>

                        </StyledBox>
                    </Grid>
                    <Grid
                        item
                        md={4}
                    >
                        <StyledBox $isBig={false}>

                            Conteudo - Editar nome da lista

                        </StyledBox>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default Edit