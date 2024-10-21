import { Container, Typography } from "@mui/material"

const Lists = () => {

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
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'Josefin Sans, sans-serif'
                    }}
                >
                    Veja suas Listas
                </Typography>
                
            </Container>
        </>
    )
}

export default Lists