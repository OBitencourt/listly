
import { Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { EditListBox, StyledBox,  TasksWrapper } from "./style";
import TasksCard from "@/src/components/Tasks/TasksCard";
import axios from "axios";
import TaskModal from "@/src/components/Modals/TaskModal";
import TemplateDefault from "@/src/templates/Default";

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

    const handleDeleteTask = (taskId: string) => {
        
        const updatedTasks = tasks.filter((task) => task._id !== taskId);
    
        // Atualizar a lista no backend com a nova lista de tarefas (sem a removida)
        
        axios
          .put(`http://localhost:8080/listly/lists/${_id}`, {
            title: title,
            tasks: updatedTasks,
          })
          .then(() => {
            // Atualizar o estado no frontend para refletir a mudança
            setTasks(updatedTasks);
            console.log("Tarefa removida e lista atualizada com sucesso");

           
          })
          .catch((error) => {
            console.error("Erro ao remover a tarefa:", error);
          });

      };

    console.log(tasks)

    return (
        <>
            <TemplateDefault>

                <Container 
                    maxWidth='md'
                    sx={{
                        height: '90vh',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                    
                >   
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'Inria Serif',
                            ml: 1
                        }}
                        gutterBottom
                    >
                        {title}

                    </Typography>
                    
                    <Grid container spacing={3}>
                        <Grid item md={8}>
                            <StyledBox>

                                <TasksWrapper>
                                    {
                                        tasks.map(task => (
                                            <TasksCard 
                                                key={task._id}
                                                task={task.task}
                                                onRemove={handleDeleteTask}
                                                id={task._id}
                                            />
                                        ))
                                    }
                                </TasksWrapper>
                                <TaskModal id={_id as string}/>
                            </StyledBox>
                        </Grid>
                        <Grid item md={4}>
                            <EditListBox>

                            </EditListBox>
                        </Grid>
                    </Grid>
                </Container>
            </TemplateDefault>
        </>
    )
}

export default Edit

//

/*

    {
                                        tasks.map(task => (
                                            <TasksCard 
                                                key={task._id}
                                                task={task.task}
                                                onRemove={handleDeleteTask}
                                                id={task._id}
                                            />
                                        ))
                                    }
    POR DENTRO DO TASK WRAPPER

    <TaskModal id={_id as string}/>
*/