import { Grid } from '@mui/material'
import TaskTracerKanbanComponent from '../../components/shared/kanban/TaskTracerKanbanComponent'
import TaskTracerChatbox from '../../components/shared/chatbox/TaskTracerChatbox'
const TaskTracerDashboardContainer = () => {
  return (
    <>
      <div>
          <Grid container>
              <Grid item xs={12}>
                <TaskTracerKanbanComponent/>
              </Grid>
          </Grid>
          <Grid container>
              <Grid item xs={12}>
                <TaskTracerChatbox/>
              </Grid>
          </Grid>
      </div>

    </>
  )
}

export default TaskTracerDashboardContainer