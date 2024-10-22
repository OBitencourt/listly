import { Container, Typography } from "@mui/material";
import List from '@/src/components/List/ListCard'; // Atualizando a importação de 'List'
import { Card } from '@/src/components/List/style';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";

import ListModal from "@/src/components/Modals/ListModal";

// Definindo a estrutura de uma lista, incluindo _id, title, tasks e createdAt

interface List {
    _id: string;
    title: string;
    tasks: string[]; // Array de tasks, mesmo que não seja usado agora
    createdAt: string; // Data de criação da lista
}

const Lists = () => {
    const router = useRouter()
    const [lists, setLists] = useState<List[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/listly/lists/')
            .then(response => {
                const data: List[] = response.data;
                setLists(data);
                console.log(data); // Verificando os dados recebidos
            })
            .catch(error => {
                console.error("Erro ao obter listas:", error);
            });
    }, []);

    const handleDeleteList = (_id: string) => {
        axios.delete(`http://localhost:8080/listly/lists/${_id}`)
            .then(() => {
                console.log('Lista deletada com sucesso')

                const newListsState = lists.filter(list => list._id !== _id)
                setLists(newListsState)
            })
    }

    const handleEditList = (_id: string) => {
        router.push(`/lists/edit/${_id}`)
    
    }

    return (
        <Container
            maxWidth='sm'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                height: '80vh',
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
                    <List 
                    key={list._id}  // React precisa da 'key', mas ela não é passada como prop
                    title={list.title}
                    _id={list._id}  // Passando o '_id' explicitamente como prop
                    onRemove={handleDeleteList}
                    onEditList={handleEditList}
                    />
                ))}
                    

            </Card>
            <ListModal />

        </Container>
    );
}

export default Lists;
