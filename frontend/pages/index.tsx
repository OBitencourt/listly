import { Container, Typography } from "@mui/material"
import Image from "next/image"


const Index = () => {

    return (

        <>
            <Container
                maxWidth='sm'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >

                <Image 
                    src="/images/organizer.svg"
                    width={300}
                    height={300}
                    alt='organizer'
                />
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{ fontFamily: 'Josefin Sans, sans-serif', fontWeight: '400' }}
                >
                    Listly
                </Typography>

                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    sx={{ fontFamily: 'Josefin Sans, sans-serif', fontWeight: '300', marginTop: 2, marginBottom: 5 }}
                >
                    O melhor web app de gerenciamento de listas
                </Typography>
            </Container>
        </>
    )
}

export default Index