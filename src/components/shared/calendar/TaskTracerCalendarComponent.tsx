import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Grid, Box, Button, Typography, IconButton } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import TaskCard from '../task/TaskCard';
import './styles.css';
import TaskTracerDialog from '../task/dialog/TaskTracerDialog';
import { deleteTask, getTasksByProjectAndDate } from '../../../service/taskService';
import { ITask } from 'modal/Task';
import DeleteIcon from '@mui/icons-material/Delete';
interface TaskTracerCalendarComponentProps {
  username: string;
  projectId: string;
}

interface IUpdateTask {
  id:string,
  title:string,
  description:string
}

const TaskTracerCalendarComponent: React.FC<TaskTracerCalendarComponentProps> = (props) => {
  const {username, projectId} = props;

  const[selectedTask, setSelectedTask] = React.useState<IUpdateTask>();
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [taskTitle , setTaskTitle] = React.useState<string>("");
  const [taskDescription, setTaskDescription] = React.useState<string>("");
  const [tasks, setTasks] = React.useState<ITask[]>();
  const [refresh, setRefresh] = React.useState<boolean>(false);

  const convertToISOFormat = (dateString: string): string => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateParts = dateString.split(" ");
    const monthIndex = months.indexOf(dateParts[2]) + 1;
    const day = dateParts[1];
    const year = dateParts[3];
    const time = "00:00:00";
    const isoDateString = `${year}-${monthIndex.toString().padStart(2, "0")}-${day.padStart(2, "0")}T${time}`;
    return isoDateString;
};

  React.useEffect(()=>{
    const fetchData = async () => {
      try {
        if(selectedDate){
          const tasks = await getTasksByProjectAndDate(projectId, convertToISOFormat(selectedDate.toString()));
          setTasks(tasks);
        }
      } catch (error) {
        console.error("Error fetching filtered tasks:", error);
      }
    };
    fetchData();
  },[selectedDate])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedDate && refresh) {
          const tasks = await getTasksByProjectAndDate(projectId, convertToISOFormat(selectedDate.toString()));
          setTasks(tasks);
          setRefresh(false);
        }
      } catch (error) {
        console.error("Error fetching filtered tasks:", error);
      }
    };
    fetchData();
  }, [refresh, selectedDate]);


  const handleDelete = async (taskId:string)=> {
    try{
      const task = await deleteTask(taskId);
      setRefresh(true);
    }catch(error){
      setRefresh(false);
      console.error("Error while deleting task", error);
    }
  }

  return (
    <Box border={1} width="100%" p={2} className=""  style={{ height: "80vh", border:'1px solid transparent' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ height: "100%" }}>
        <Grid item xs={1}/>
        <Grid item xs={4} className="" style={{marginBottom:'5vh'}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              openTo="year"
              value={selectedDate}
              onChange={(newValue:any) => {
                setSelectedDate(newValue);
              }}
          />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={7} container spacing={2}  style={{ marginTop: '5vh', height: '100%', overflowY: 'auto'}}>
          <Grid item xs={12} sm={12}  style={{ width: '100%' , marginRight:'29vh'}}>
            <Typography variant="h5" gutterBottom style={{ marginBottom: '10px' }}>{selectedDate?.format("DD / MM / YYYY")}</Typography>
            <Button variant='contained' color='success' onClick={()=>{setOpenDialog(true); setIsEditMode(false)}} style={{width:'80%'}}>+</Button>  
          </Grid>  
          {tasks && tasks.map((data, index) => (
             <Grid item xs={12} sm={12} key={index} style={{ width: '100%', marginLeft: '10vh' }}>
             <Grid container>
               <Grid item xs={10}>
                 <TaskCard
                   id={data.id}
                   title={data.title}
                   description={data.description}
                   setOpenDialog={setOpenDialog}
                   setIsEditMode={setIsEditMode}
                   setSelectedTask={setSelectedTask}
                 />
               </Grid>
               <Grid item xs={2} className="closeIconContainer">
                  <IconButton>
                    <DeleteIcon
                      fontSize='medium'
                      color='error'
                      onClick={() => handleDelete(data.id) }
                    />
                  </IconButton>
                </Grid>
             </Grid>
           </Grid>
          ))}
          {selectedDate && 
          (<TaskTracerDialog
           openDialog={openDialog}
           setOpenDialog={setOpenDialog}
           mode= {isEditMode ? "update task" : "create task"}
           taskTitle={taskTitle}
           setTaskTitle={setTaskTitle} 
           taskDescription={taskDescription}
           setTaskDescription={setTaskDescription}
           username={username}
           date={convertToISOFormat(selectedDate.toString())}
           projectId={projectId}
           selectedTask={selectedTask}
           setRefresh={setRefresh}
           />)}
        </Grid>
      </Grid>
    </Box>
  );
}

export default TaskTracerCalendarComponent;
