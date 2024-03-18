import { Grid } from '@mui/material'
import TaskTracerDashboardContainer from '../../container/dashboard/TaskTracerDashboardContainer'

const TaskTracerDashboard = () => {
  return (
    <>
      <div>
          <Grid container>
              <Grid item xs={12}>
                <TaskTracerDashboardContainer/>
              </Grid>
          </Grid>
      </div>

    </>
  )
}

export default TaskTracerDashboard