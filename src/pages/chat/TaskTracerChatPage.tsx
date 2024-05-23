import React from "react";
import TaskTracerChatContainer from "../../container/chat/TaskTracerChatContainer";
import { Grid } from '@mui/material'


const TaskTracerChatPage = () => {
    return(
    <React.Fragment>
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <TaskTracerChatContainer/>
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    </React.Fragment>
    )
}



export default TaskTracerChatPage;