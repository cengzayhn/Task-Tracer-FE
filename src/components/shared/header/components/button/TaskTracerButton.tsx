import { Button, Grid } from '@mui/material';
import './styles.css';
import { Link } from 'react-router-dom';

interface TaskTracerHeaderButtonProps {
    projectId: string;
    username: string;
    setUsername: Function
}

const TaskTracerButton: React.FC<TaskTracerHeaderButtonProps> = (props) => {
    const { projectId } = props;

    return (
        <Grid container style={{ marginTop: '1.5vh' }}>
            <Grid item xs={3}>
                <Link to={`/projects/${projectId}`}>
                    <Button variant='text' className='task-tracer-button'>
                        <img src="/resources/TaskTracerExtendedLogo.png" alt="Logo" className="logo" />
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={3}>
                <Link to="/projects">
                    <Button variant='text' className='task-tracer-button'>PROJECTS</Button>
                </Link>
            </Grid>
            <Grid item xs={3}>
                <Link to={`/projects/${projectId}/chat`}>
                    <Button variant='text' className='task-tracer-button'>CHAT</Button>
                </Link>
            </Grid>
            <Grid item xs={3}>
                <Link to={`/projects/${projectId}/calendar`}>
                    <Button variant='text' className='task-tracer-button'>TASK</Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default TaskTracerButton;
