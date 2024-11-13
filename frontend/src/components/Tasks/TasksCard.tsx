import { IconButton } from "@mui/material"
import { Actions, TaskBox } from "./style"
import Image from "next/image"
import { useState } from "react"
import RemoveModal from '../Modals/RemoveModal'

interface Tasks {
    task: string
    id: string
    onRemove: (id: string) => void;
}

const TasksCard = ({
    task,
    id,
    onRemove,
}: Tasks) => {

    const [open, setOpen] = useState(false)

    const handleConfirmModal = (id: string) => {
        onRemove(id)


    }

    const handleToggleModal = () => {

        setOpen(!open)

    }


    return (

        <>
            <TaskBox>
                {task}



                <Actions>
                    <IconButton>
                        <Image 
                            src="/images/edit-black.svg"
                            width={15}
                            height={15}
                            alt='edit task'
                        />

                    </IconButton>
                    <IconButton
                        onClick={handleToggleModal}
                    >
                        <Image 
                            src="/images/delete-black.svg"
                            width={15}
                            height={15}
                            alt='delete task'
                        />

                    </IconButton>

                </Actions>

                <RemoveModal
                    open={open}
                    onClose={handleToggleModal}
                    onConfirm={() => handleConfirmModal(id)}
                    title='Excluir tarefa'
                    message={`Deseja realmente excluir essa tarefa? Essa ação será irreversível.`}
                />
            </TaskBox>
        </>
    )
}

export default TasksCard