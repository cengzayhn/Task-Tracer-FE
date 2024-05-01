import { Grid } from '@mui/material'
import TaskTracerCalendarComponent from '../../components/shared/calendar/TaskTracerCalendarComponent';


const TaskTracerCalendarPage = () => {
    return(
    <>
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <TaskTracerCalendarComponent/>
                </Grid>
            </Grid>
        </div>
    </>
    )
}


export default TaskTracerCalendarPage;