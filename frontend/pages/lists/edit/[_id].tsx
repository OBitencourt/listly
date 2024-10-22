
import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledBox, StyledButton, TasksWrapper } from "./style";
import TasksCard from "@/src/components/Tasks/TasksCard";
import axios from "axios";


interface Tasks {
    _id: string
    tasks: string[]; // 
    task: string
    createdAt: string; // Data de criação da lista
}


const Edit = () => {
    const router = useRouter();
    const { _id } = router.query; // Pegando o _id da URL
    console.log(_id)

    const [tasks, setTasks] = useState<Tasks[]>([])

    useEffect(() => {

        axios.get(`http://localhost:8080/listly/lists/${_id}`)
            .then(response => {
                const data = response.data
                const tasks = data[0].tasks
                

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

                            <StyledButton>
                                Adicionar tarefa
                            </StyledButton>

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