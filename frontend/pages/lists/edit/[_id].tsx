
import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { StyledBox, StyledButton, TasksWrapper } from "./style";

const Edit = () => {

    const router = useRouter();
    const { _id } = router.query; // Pegando o _id da URL
    console.log(_id)

    useEffect(() => {

        if (_id) {

            console.log(`O id da lista é: ${_id}`);
            
        }
    }, [_id]);

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


                                Conteudo - Adicionar novas tasks - Ver tasks - Editar tasks - Excluir tasks


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