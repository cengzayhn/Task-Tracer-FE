import { Button, Grid } from '@mui/material';
import './styles.css';
import { Link } from 'react-router-dom';

const TaskTracerButton = () => {

    return(
    <>
        <Grid container style={{marginTop:'1.5vh'}}>
            <Grid item xs={3}>
                <Link to="/">
                    <Button variant='text' color='success' className='task-tracer-button'>
                        <img src="/resources/TaskTracerExtendedLogo.png" alt="Logo" className="logo" />
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={3}>
                <Link to="/projects">
                    <Button variant='text' color='success' className='task-tracer-button'>Projects</Button>
                </Link>
            </Grid>
            <Grid item xs={3}>
                <Link to="/teams">
                    <Button variant='text' color='success' className='task-tracer-button'>Teams</Button>
                </Link>
            </Grid>  
            <Grid item xs={3}>
                <Link to="/calendar">
                    <Button variant='text' color='success' className='task-tracer-button'>Calendar</Button>
                </Link>
            </Grid>
        </Grid>  
    </>
    )

}

export default TaskTracerButton;
