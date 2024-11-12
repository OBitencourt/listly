import { Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { StyledButton, StyledGrid } from "./style"

 // import {motion} from 'framer-motion'

const Index = () => {

    return (

        <>          

            <StyledGrid container >

                <Container
                    maxWidth='sm'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography
                        variant="h2"
                        color="black"
                        sx={{
                            fontFamily: 'Inria Serif'
                        }}
                        component='h1'
                        fontSize={95}
                        gutterBottom
                        fontWeight={400}
                    >   
                        Listly
                    </Typography>
                    <Typography
                        variant="h2"
                        color="black"
                        align="center"
                        sx={{
                            fontFamily: 'Inria Serif',
                            marginBottom: 10
                        }}
                        component='h1'
                        fontSize={30}
                        fontWeight={300}
                        
                    >   
                        Onde suas ideias encontram organização.
                    </Typography>
                    <StyledButton>
                        Comece já!
                    </StyledButton>
                </Container>
            </StyledGrid>
        </>
    )
}

export default Index