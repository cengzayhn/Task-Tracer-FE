import React from "react";
import TaskTracerProjectsContainer from "../../container/projects/TaskTracerProjectsContainer";
import { Grid } from '@mui/material'

const TaskTracerProjectsPage = () => {
    return(
    <React.Fragment>
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <TaskTracerProjectsContainer/>
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    </React.Fragment>
    )
}



export default TaskTracerProjectsPage;