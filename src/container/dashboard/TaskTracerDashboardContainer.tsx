import { Grid } from '@mui/material'
import TaskTracerKanbanComponent from '../../components/shared/kanban/TaskTracerKanbanComponent'
import TaskTracerChatbox from '../../components/shared/chatbox/TaskTracerChatboxContainer'
import { useState } from 'react'
const TaskTracerDashboardContainer = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div>
          <Grid container>
              <Grid item xs={12}>
                
              </Grid>
          </Grid>
          <Grid container justifyContent={'flex-end'} style={{position:'absolute',bottom:'10vh',right:'-10vh'}}>
              <Grid item xs={3}>
                <TaskTracerChatbox show={show} setShow={setShow}/>
              </Grid>
          </Grid>
      </div>

    </>
  )
}

export default TaskTracerDashboardContainer