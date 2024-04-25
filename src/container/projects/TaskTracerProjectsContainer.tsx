import React from 'react';
import './styles.css';
import { Grid } from '@mui/material'
import TaskTracerProjectsCard from '../../components/shared/projects-card/TaskTracerProjectsCard';
import { Link } from 'react-router-dom';

const TaskTracerProjectsContainer = () => {
    
    const dummyData = [
        { name: 'Proje 1', description: 'Bu bir açıklamadır 1.' },
        { name: 'Proje 2', description: 'Bu bir açıklamadır 2.' },
        { name: 'Proje 3', description: 'Bu bir açıklamadır 3.' },
        { name: 'Proje 4', description: 'Bu bir açıklamadır 4.' },
        { name: 'Proje 5', description: 'Bu bir açıklamadır 5.' },
        { name: 'Proje 6', description: 'Bu bir açıklamadır 6.' },
        { name: 'Proje 7', description: 'Bu bir açıklamadır 7.' },
        { name: 'Proje 8', description: 'Bu bir açıklamadır 8.' },
    ];

    return(
        <React.Fragment>
            <Grid container spacing={5} style={{marginTop:'5vh'}}>
                {dummyData.map((data, index) => (
                    <Grid item xs={3} key={index}>
                        <Link className='projects-link' to={`/project/${index}`}> {/* TODO: should be refactored */}
                            <TaskTracerProjectsCard name={data.name} description={data.description} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default TaskTracerProjectsContainer;
