import React from "react";
import TaskTracerProjectsContainer from "../../container/projects/TaskTracerProjectsContainer";
import { Grid } from '@mui/material'

interface TaskTracerProjectsPageProps {
    projectId: string;
    setProjectId: Function;
    username: string;
}

const TaskTracerProjectsPage:React.FC<TaskTracerProjectsPageProps> = (props) => {
    
    return(
    <React.Fragment>
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <TaskTracerProjectsContainer {...props}/>
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    </React.Fragment>
    )
}



export default TaskTracerProjectsPage;