import { Grid } from '@mui/material'
import TaskTracerCalendarComponent from '../../components/shared/calendar/TaskTracerCalendarComponent';

interface TaskTracerCalendarPageProps {
    username: string;
    projectId: string;
}

const TaskTracerCalendarPage:React.FC<TaskTracerCalendarPageProps> = (props) => {
    const {username, projectId} = props
    return(
    <>
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <TaskTracerCalendarComponent username={username} projectId={projectId}/>
                </Grid>
            </Grid>
        </div>
    </>
    )
}


export default TaskTracerCalendarPage;