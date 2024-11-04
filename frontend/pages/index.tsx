import { Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { Card, IconsWrapper, StyledGrid } from "./style"
import {motion} from 'framer-motion'

const Index = () => {

    return (

        <>
            <motion.div
                initial={{ 
                    opacity: 0, 
                    y: 10, 
                    x: -100,
                    rotate: -20
                }}
                whileInView={{ 
                    opacity: 1, 
                    y: -100,
                    x: -80,
                    rotate: 20
                }} 
                viewport={{ once: false, amount: 0}} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '-100px',
                    borderRadius: '100px',
                        
                }}
            >
                <Image
                    width={500}
                    height={500}
                    src='/images/listly-mini-logo.png'
                    alt="logo"
                    style={{
                        backgroundColor: 'transparent',
                    }}
                />
                    
            </motion.div>

            <motion.div
                initial={{ 
                    opacity: 0, 
                    y: 570, 
                    x: 1150,
                    rotate: 20
                }}
                whileInView={{ 
                    opacity: 1, 
                    y: 500,
                    x: 1100,
                    rotate: -20
                }} 
                viewport={{ once: false, amount: 0}} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '-100px',
                    borderRadius: '100px',
                        
                }}
            >
                <Image
                    width={150}
                    height={150}
                    src='/images/orange-list.png'
                    alt="logo"
                    style={{
                        backgroundColor: 'transparent',
                    }}
                />
                    
            </motion.div>

            <StyledGrid $isWhite={false} $isMinor={false} container >

                <StyledGrid $isWhite={false} $isMinor item md={6}>
                    <Typography
                        sx={{
                            fontFamily: 'Josefin Sans'
                        }}
                        component='h1'
                        variant='h3'
                        align="center"
                    >
                        Listly
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Josefin Sans',
                            mt: 3,
                            mb: 3
                        }}
                        component='h1'
                        variant='body1'
                        fontSize={30}
                        lineHeight={1}
                        align="center"
                    >
                        Onde suas ideias encontram organização.
                    </Typography>
                    

                    <IconsWrapper>
                        <Card>

                            <Image 
                                src='/images/clipboard-tasks.svg'
                                width={60}
                                height={60}
                                alt="clipboard-tasks"
                            />
                            <Typography
                                sx={{
                                    fontFamily: 'Josefin Sans',
                                    ml: 1.4,
                                    mt: 1
                                }}
                                component='h1'
                                variant='body1'
                                fontSize={20}
                                lineHeight={1}
                            >
                                Administre seus itens e tarefas!
                            </Typography>
                        </Card>
                        <Card>

                            <Image 
                                src='/images/lists.svg'
                                width={35}
                                height={35}
                                alt="clipboard-tasks"
                                style={{
                                    marginLeft: '13px',
                                    margin: '15px'
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: 'Josefin Sans',
                                    ml: 1
                                }}
                                component='h1'
                                variant='body1'
                                fontSize={20}
                                lineHeight={1}
                            >
                                Crie quantas listas quiser!
                            </Typography>
                        </Card>

                        <Card>

                            <Image 
                                src='/images/person.svg'
                                width={35}
                                height={35}
                                alt="clipboard-tasks"
                                style={{
                                    marginLeft: '12px'
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: 'Josefin Sans',
                                    ml: 3
                                }}
                                component='h1'
                                variant='body1'
                                fontSize={20}
                                lineHeight={1}
                            >
                                Gerencie suas listas!
                            </Typography>
                        </Card>
                    </IconsWrapper>
                </StyledGrid>

                <StyledGrid $isWhite={true} $isMinor={false} item md={6}>
                    <Typography
                        sx={{
                            fontFamily: 'Josefin Sans',
                            
                        }}
                        component='h1'
                        variant='body1'
                        fontSize={27}
                        lineHeight={1}
                    >
                        A vida pode ser agitada, mas o Listly está aqui para ajudar! Nossa plataforma permite que você crie listas de forma fácil e rápida, mantendo tudo ao seu alcance. Diga adeus ao caos e olá à organização!
                    </Typography>

                </StyledGrid>
            </StyledGrid>
        </>
    )
}

export default Index