import { Grid } from '@mui/material'
import TaskTracerFooterComponent from '../../components/shared/footer/TaskTracerFooterComponent'
import TaskTracerHeaderComponent from '../../components/shared/header/TaskTracerHeaderComponent'
import React from 'react'

const TaskTracerDashboard = () => {
  return (
    <>
      <div>
          <Grid container>
              <Grid item xs={12}>
                <TaskTracerHeaderComponent/>
                CONTENT
                <TaskTracerFooterComponent/>
              </Grid>
          </Grid>
      </div>

    </>
  )
}

export default TaskTracerDashboard