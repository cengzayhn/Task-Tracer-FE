import { Grid } from '@mui/material';
import {TaskTracerLogo} from './components/logo/TaskTracerLogo';
import TaskTracerButton from './components/button/TaskTracerButton';
import TaskTracerProfile from './components/profile/TaskTracerUserProfile';
import { Container } from '@mui/system';

interface TaskTracerHeaderComponentProps {
    projectId: string;
}

const TaskTracerHeaderComponent:React.FC<TaskTracerHeaderComponentProps> = (props) => {

    return(
    <>
        <div>
            <Container maxWidth="lg" style={{borderBottom:'2px solid green'}}>
                <Grid container>
                    <Grid item xs={11}>
                        <TaskTracerButton {...props}/>
                    </Grid>
                    <Grid item xs={1}>
                        <TaskTracerProfile userName='Cengiz Ayhan'/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    </>
    )

}

export default TaskTracerHeaderComponent;
