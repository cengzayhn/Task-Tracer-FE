import React from "react";
import './styles.css';
import { Avatar, Grid } from '@mui/material'
import TaskTracerSidebarComponent from "../../components/shared/sidebar/TaskTracerSidebarComponent";
import TaskTracerChatComponent from "../../components/shared/chat/TaskTracerChatComponent";

interface TaskTracerChatContainerProps{
    username: string;
}

const TaskTracerChatContainer:React.FC<TaskTracerChatContainerProps> = ({username}) => {
    const sidebarItem = [
        { content: "Members", value: [
            <div>
                <Avatar></Avatar>
                Member 1
            </div>,
            <div>
            <Avatar></Avatar>
            Member 2
        </div>,
        ] },
    ];

    return(
    <React.Fragment>
        <Grid container>
            <Grid item xs={2}>
                <div className='sidebar-container'>
                    <TaskTracerSidebarComponent title="Chatroom" items={sidebarItem}/>
                </div>
            </Grid>
            <Grid item xs={10}>
                <div className='chat-container'>
                    <TaskTracerChatComponent username={username}/>
                </div>  
            </Grid>
        </Grid>

    </React.Fragment>
    )


}

export default TaskTracerChatContainer;