import { Container, Typography } from "@mui/material";
import ListCard from '@/src/components/List/ListCard';
import { Card } from '@/src/components/List/style';
import axios from "axios";
import React, { useEffect, useState } from 'react';

// Definindo a estrutura de uma lista
interface List {
    _id: string;
    title: string;
}

const Lists = () => {
    // Tipando o estado como um array de 'List'
    const [lists, setLists] = useState<List[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/listly/lists/')
            .then(response => {
                const data: List[] = response.data; // Garantindo que os dados sejam do tipo List[]
                setLists(data);
                console.log(data); // Verificando os dados recebidos
            })
            .catch(error => {
                console.error("Erro ao obter listas:", error);
            });
    }, []);

    return (
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
                {lists.map(list => (
                    <ListCard 
                        key={list._id}  // Usando _id como chave
                        title={list.title}
                    />
                ))}

                <ListCard 
                    title='Primeira Lista'
                />
            </Card>
        </Container>
    );
}

export default Lists;
