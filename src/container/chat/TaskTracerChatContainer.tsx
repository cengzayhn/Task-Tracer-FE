import React from "react";
import './styles.css';
import { Grid } from '@mui/material'
import TaskTracerSidebarComponent from "../../components/shared/sidebar/TaskTracerSidebarComponent";
import TaskTracerChatComponent from "../../components/shared/chat/TaskTracerChatComponent";


const TaskTracerChatContainer = () => {
    const sidebarItems = [
        { content: "Item 1", value: ["Value 1","Value 1","Value 1"] },
        { content: "Item 2", value: ["Value 2","Value 2"] },
        { content: "Item 3", value: ["Value 3","Value 3","Value 3","Value 3","Value 3"] }
    ];

    return(
    <React.Fragment>
        <Grid container>
            <Grid item xs={2}>
                <div className='sidebar-container'>
                    <TaskTracerSidebarComponent title="Projects" items={sidebarItems}/>
                </div>
            </Grid>
            <Grid item xs={10}>
                <div className='chat-container'>
                    <TaskTracerChatComponent/>
                </div>  
            </Grid>
        </Grid>

    </React.Fragment>
    )


}

export default TaskTracerChatContainer;