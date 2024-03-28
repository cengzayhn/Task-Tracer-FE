import { Button, Grid } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TaskTracerChatbox from './component/TaskTracerChatbox';


interface TaskTracerChatboxContainerProps{
  show:boolean;
  setShow:Function;
}

const TaskTracerChatboxContainer = (props:TaskTracerChatboxContainerProps) => {

  const {show, setShow} = props;

  const toggleShowChatbox = () => {
    //@ts-ignore
    setShow(prevState => !prevState);
  }

  return (
    <>
      <div>
          <Grid container justifyContent="space-between" alignItems="flex-end">

            <Grid item xs={3} style={{textAlign:'right'}}>
              {show ? <TaskTracerChatbox toggleShowChatbox={toggleShowChatbox}/> : (
                <div>
                  <Button onClick={toggleShowChatbox} variant='contained' color='success'> 
                    <ArrowUpwardIcon/>
                    <span>chatbox</span>
                  </Button>
                </div>
              )}
            </Grid>
          </Grid>
      </div>

    </>
  )
}

export default TaskTracerChatboxContainer;