import { Grid } from '@mui/material'
import TaskTracerDashboardComponent from '../../components/shared/kanban/TaskTracerDashboardComponent';
import { useState } from 'react'

interface TaskTracerDashboardContainerProps {
  projectId: string;
  projectName: string;
}

const TaskTracerDashboardContainer:React.FC<TaskTracerDashboardContainerProps> = (props) => {
  return (
    <>
      <div>
          <Grid container>
              <Grid item xs={12}>
                <TaskTracerDashboardComponent {...props}/>
              </Grid>
          </Grid>
      </div>

    </>
  )
}

export default TaskTracerDashboardContainer