import { Grid } from '@mui/material'
import TaskTracerDashboardComponent from '../../components/shared/kanban/TaskTracerDashboardComponent';

import { useState } from 'react'
const TaskTracerDashboardContainer = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div>
          <Grid container>
              <Grid item xs={12}>
                <TaskTracerDashboardComponent/>
              </Grid>
          </Grid>
      </div>
    </>
  )
}

export default TaskTracerDashboardContainer