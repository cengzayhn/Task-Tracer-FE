import React from "react";
import TaskTracerChatContainer from "../../container/chat/TaskTracerChatContainer";
import { Grid } from '@mui/material'

interface TaskTracerChatPageProps{
    userData: {
        username: string;
        connected: boolean;
        password: string;
        message: string;
    };
    setUserData: Function;
}

const TaskTracerChatPage:React.FC<TaskTracerChatPageProps> = ({userData, setUserData}) => {
    return(
    <React.Fragment>
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <TaskTracerChatContainer userData={userData} setUserData={setUserData}/>
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    </React.Fragment>
    )
}



export default TaskTracerChatPage;