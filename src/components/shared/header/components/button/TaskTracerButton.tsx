import { Button, Grid } from '@mui/material';
import './styles.css';

const TaskTracerButton = () => {

    return(
    <>
        <Grid container style={{marginTop:'1.5vh'}}>
            <Grid item xs={4}>
                <Button variant='text'color='success' className='task-tracer-button'>Projects</Button> 
            </Grid>
            <Grid item xs={4}>
                <Button variant='text' color='success' className='task-tracer-button'>Teams</Button>
            </Grid>  
            <Grid item xs={4}>
                <Button variant='text' color='success' className='task-tracer-button'>Calendar</Button>
            </Grid>
        </Grid>  
    </>
    )

}

export default TaskTracerButton;
