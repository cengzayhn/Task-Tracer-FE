import { Grid } from '@mui/material';
import {TaskTracerLogo} from './components/logo/TaskTracerLogo';
import TaskTracerButton from './components/button/TaskTracerButton';
import TaskTracerProfile from './components/profile/TaskTracerUserProfile';
import { Container } from '@mui/system';

const TaskTracerHeaderComponent = () => {

    return(
    <>
        <div>
            <Container maxWidth="lg" style={{borderBottom:'2px solid green'}}>
                <Grid container>
                    <Grid item xs={2}>
                        <TaskTracerLogo/>
                    </Grid>
                    <Grid item xs={9}>
                        <TaskTracerButton/>
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
