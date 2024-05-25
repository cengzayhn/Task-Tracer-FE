import React, { useState } from 'react';
import './styles.css';
import { Button, Grid } from '@mui/material';
import TaskTracerProjectsCard from '../../components/shared/projects-card/TaskTracerProjectsCard';
import { Link } from 'react-router-dom';
import { IProject } from 'modal/Project';
import TaskTracerDialog from '../../components/shared/task/dialog/TaskTracerDialog';

const TaskTracerProjectsContainer = () => {
    
    const dummyData: IProject[] = [
        { 
            id: '1', 
            name: 'Proje 1', 
            createdDate: '2023-01-01', 
            closedDate: '2023-06-01', 
            taskIdList: ['task1', 'task2'], 
            memberIdList: ['member1', 'member2'], 
            isOpen: true 
        },
        { 
            id: '2', 
            name: 'Proje 2', 
            createdDate: '2023-02-01', 
            closedDate: '2023-07-01', 
            taskIdList: ['task3', 'task4'], 
            memberIdList: ['member3', 'member4'], 
            isOpen: false 
        },
        { 
            id: '3', 
            name: 'Proje 3', 
            createdDate: '2023-03-01', 
            closedDate: '2023-08-01', 
            taskIdList: ['task5', 'task6'], 
            memberIdList: ['member5', 'member6'], 
            isOpen: true 
        },
        { 
            id: '4', 
            name: 'Proje 4', 
            createdDate: '2023-04-01', 
            closedDate: '2023-09-01', 
            taskIdList: ['task7', 'task8'], 
            memberIdList: ['member7', 'member8'], 
            isOpen: false 
        },
        { 
            id: '5', 
            name: 'Proje 5', 
            createdDate: '2023-05-01', 
            closedDate: '2023-10-01', 
            taskIdList: ['task9', 'task10'], 
            memberIdList: ['member9', 'member10'], 
            isOpen: true 
        },
        { 
            id: '6', 
            name: 'Proje 6', 
            createdDate: '2023-06-01', 
            closedDate: '2023-11-01', 
            taskIdList: ['task11', 'task12'], 
            memberIdList: ['member11', 'member12'], 
            isOpen: false 
        },
        { 
            id: '7', 
            name: 'Proje 7', 
            createdDate: '2023-07-01', 
            closedDate: '2023-12-01', 
            taskIdList: ['task13', 'task14'], 
            memberIdList: ['member13', 'member14'], 
            isOpen: true 
        },
        { 
            id: '8', 
            name: 'Proje 8', 
            createdDate: '2023-07-01', 
            closedDate: '2023-12-01', 
            taskIdList: ['task13', 'task14'], 
            memberIdList: ['member13', 'member14'], 
            isOpen: true 
        }
    ]
    const [openDialog, setOpenDialog] = useState(false);
    const [projectName, setProjectName] = useState<string>("");

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };
    return(
        <React.Fragment>
            <Grid container className="button-container">
                <Grid item xs={2}/>
                <Grid item xs={8} className='taskcreate-container'>
                    <Button className='taskcreate-button' variant='contained' color='success' onClick={handleOpenDialog}>+</Button>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
            <Grid container spacing={5} style={{marginTop:'0.5vh'}}>
                {dummyData.map((data, index) => (
                    <Grid item xs={3} key={index}>
                        <Link className='projects-link' to={`/project/${index}`}> {/* TODO: should be refactored */}
                            <TaskTracerProjectsCard name={data.name} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <TaskTracerDialog 
                openDialog={openDialog} 
                setOpenDialog={setOpenDialog} 
                mode={"create project"} 
                taskTitle={projectName} 
                setTaskTitle={setProjectName} 
                username="currentUsername" 
                date="currentDate" 
            />
        </React.Fragment>
    )
}

export default TaskTracerProjectsContainer;
