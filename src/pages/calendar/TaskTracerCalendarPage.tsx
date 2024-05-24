import { Grid } from '@mui/material'
import TaskTracerCalendarComponent from '../../components/shared/calendar/TaskTracerCalendarComponent';

interface TaskTracerCalendarPageProps {
    username: string;
}

const TaskTracerCalendarPage:React.FC<TaskTracerCalendarPageProps> = (props) => {
    const {username} = props
    return(
    <>
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <TaskTracerCalendarComponent username={username}/>
                </Grid>
            </Grid>
        </div>
    </>
    )
}


export default TaskTracerCalendarPage;