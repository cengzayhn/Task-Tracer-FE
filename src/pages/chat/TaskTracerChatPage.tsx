import React from "react";
import TaskTracerChatContainer from "../../container/chat/TaskTracerChatContainer";
import { Grid } from '@mui/material'


interface TaskTracerChatPageProps {
    username:string;
} 

const TaskTracerChatPage:React.FC<TaskTracerChatPageProps> = ({username}) => {
    return(
    <React.Fragment>
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <TaskTracerChatContainer username={username}/>
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    </React.Fragment>
    )
}



export default TaskTracerChatPage;