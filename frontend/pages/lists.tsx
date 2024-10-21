import { Container, Typography } from "@mui/material"
import ListCard from '@/src/components/List/ListCard'
import { Card } from "@/src/components/List/style"

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

                <Card>

                    <ListCard 
                        title='Primeira Lista'
                    />
                    <ListCard 
                        title='Segunda Lista'
                    />
                </Card>
                
            </Container>
        </>
    )
}

export default Lists