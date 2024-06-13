import { Grid } from '@mui/material'
import TaskTracerCalendarComponent from '../../components/shared/calendar/TaskTracerCalendarComponent';

interface TaskTracerCalendarPageProps {
    username: string;
    projectId: string;
    projectName: string;
}

const TaskTracerCalendarPage:React.FC<TaskTracerCalendarPageProps> = (props) => {
    const {username, projectId, projectName} = props
    return(
    <>
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <TaskTracerCalendarComponent username={username} projectId={projectId} projectName={projectName}/>
                </Grid>
            </Grid>
        </div>
    </>
    )
}


export default TaskTracerCalendarPage;