import { Button, Grid } from '@mui/material';
import './styles.css';
import { Link } from 'react-router-dom';

interface TaskTracerHeaderButtonProps {
    projectId: string;
}

const TaskTracerButton: React.FC<TaskTracerHeaderButtonProps> = (props) => {
    const { projectId } = props;

    return (
        <Grid container style={{ marginTop: '1.5vh' }}>
            <Grid item xs={3}>
                <Link to={`/projects/${projectId}`}>
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
                <Link to={`/projects/${projectId}/chat`}>
                    <Button variant='text' color='success' className='task-tracer-button'>Chat</Button>
                </Link>
            </Grid>
            <Grid item xs={3}>
                <Link to={`/projects/${projectId}/calendar`}>
                    <Button variant='text' color='success' className='task-tracer-button'>Calendar</Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default TaskTracerButton;
