import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Grid, Box, Button, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import TaskCard from '../task/TaskCard';
import './styles.css';
import TaskTracerDialog from '../task/dialog/TaskTracerDialog';
import { getTasksByProjectAndDate } from '../../../service/taskService';
import { ITask } from 'modal/Task';

const dummyData = [
  { id:'',title: 'Task 1', description: 'Bu bir task açıklamasıdır 1.' },
  { id:'',title: 'Task 2', description: 'Bu bir task açıklamasıdır 2.' },
  { id:'',title: 'Task 3', description: 'Bu bir task açıklamasıdır 3.' },
  { id:'',title: 'Task 4', description: 'Bu bir task açıklamasıdır 4.' },
  { id:'',title: 'Task 5', description: 'Bu bir task açıklamasıdır 5.' },
  { id:'',title: 'Task 6', description: 'Bu bir task açıklamasıdır 6.' },
  { id:'',title: 'Task 7', description: 'Bu bir task açıklamasıdır 7.' },
  { id:'',title: 'Task 8', description: 'Bu bir task açıklamasıdır 8.' },
];
  
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
          console.log("oluyor mu.. : ", projectId);
        }
      } catch (error) {
        console.error("Error fetching filtered tasks:", error);
      }
    };
    fetchData();
  },[selectedDate])

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
            <Grid item xs={12} sm={12} key={index} style={{ width: '100%' , marginLeft:'10vh'}}>
              <TaskCard id={data.id} title={data.title} description={data.description} setOpenDialog={setOpenDialog} setIsEditMode={setIsEditMode} setSelectedTask={setSelectedTask}/>
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
           />)}
        </Grid>
      </Grid>
    </Box>
  );
}

export default TaskTracerCalendarComponent;
