import React from "react";
import './styles.css';
import { Avatar, Grid } from '@mui/material'
import TaskTracerSidebarComponent from "../../components/shared/sidebar/TaskTracerSidebarComponent";
import TaskTracerChatComponent from "../../components/shared/chat/TaskTracerChatComponent";

interface TaskTracerChatContainerProps{
    userData: {
        username: string;
        connected: boolean;
        password: string;
        message: string;
    };
    setUserData: Function;
}

const TaskTracerChatContainer:React.FC<TaskTracerChatContainerProps> = ({userData, setUserData}) => {
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
                    <TaskTracerChatComponent userData={userData} setUserData={setUserData}/>
                </div>  
            </Grid>
        </Grid>

    </React.Fragment>
    )


}

export default TaskTracerChatContainer;