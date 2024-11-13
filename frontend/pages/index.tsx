import { Container, Typography } from "@mui/material"

import { StyledButton, StyledGrid } from "./style"

import TemplateClean from '../src/templates/Clean'

// import {motion} from 'framer-motion'

import { useRouter } from "next/router"

const Index = () => {

    const router = useRouter()

    return (

        <>          
            <TemplateClean>

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
                        <StyledButton
                            onClick={() => {
                                router.push('/lists')
                            }}
                        >
                            Comece já!
                        </StyledButton>
                    </Container>
                </StyledGrid>
            </TemplateClean>
        </>
    )
}

export default Index