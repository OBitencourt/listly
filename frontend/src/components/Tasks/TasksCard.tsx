import { IconButton } from "@mui/material"
import { Actions, TaskBox } from "./style"
import Image from "next/image"

interface Tasks {
    task: string
}

const TasksCard = ({
    task
}: Tasks) => {

    return (

        <>
            <TaskBox>
                {task}



                <Actions>
                    <IconButton>
                        <Image 
                            src="/images/edit.svg"
                            width={15}
                            height={15}
                            alt='edit task'
                        />

                    </IconButton>
                    <IconButton>
                        <Image 
                            src="/images/delete.svg"
                            width={15}
                            height={15}
                            alt='delete task'
                        />

                    </IconButton>

                </Actions>
            </TaskBox>
        </>
    )
}

export default TasksCard