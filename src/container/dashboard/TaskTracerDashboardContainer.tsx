import { Grid } from '@mui/material'
import { useState } from 'react'
const TaskTracerDashboardContainer = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div>
          <Grid container>
              <Grid item xs={12}>
                DASHBOARD
              </Grid>
          </Grid>
      </div>

    </>
  )
}

export default TaskTracerDashboardContainer