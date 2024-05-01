import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Grid, Box, Button, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import TaskCard from '../task/TaskCard';
import './styles.css';
import TaskCreateDialog from '../task/task-create/TaskCreateDialog';

const dummyData = [
  { title: 'Task 1', description: 'Bu bir task açıklamasıdır 1.' },
  { title: 'Task 2', description: 'Bu bir task açıklamasıdır 2.' },
  { title: 'Task 3', description: 'Bu bir task açıklamasıdır 3.' },
  { title: 'Task 4', description: 'Bu bir task açıklamasıdır 4.' },
  { title: 'Task 5', description: 'Bu bir task açıklamasıdır 5.' },
  { title: 'Task 6', description: 'Bu bir task açıklamasıdır 6.' },
  { title: 'Task 7', description: 'Bu bir task açıklamasıdır 7.' },
  { title: 'Task 8', description: 'Bu bir task açıklamasıdır 8.' },
];

const TaskTracerCalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [taskTitle , setTaskTitle] = React.useState<string>();
  const [taskDescription, setTaskDescription] = React.useState<string>();

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
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
          />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={7} container spacing={2}  style={{ marginTop: '5vh', height: '100%', overflowY: 'auto'}}>
          <Grid item xs={12} sm={12}  style={{ width: '100%' , marginRight:'29vh'}}>
            <Typography variant="h5" gutterBottom style={{ marginBottom: '10px' }}>{selectedDate?.format("DD / MM / YYYY")}</Typography>
            <Button variant='contained' color='success' onClick={()=>setOpenDialog(true)}  style={{width:'80%'}}>+</Button>  
          </Grid>  
          {dummyData.map((data, index) => (
            <Grid item xs={12} sm={12} key={index} style={{ width: '100%' , marginLeft:'10vh'}}>
              <TaskCard title={data.title} description={data.description} />
            </Grid>
          ))}
          {selectedDate && (<TaskCreateDialog openDialog={openDialog} setOpenDialog={setOpenDialog} setTaskTitle={setTaskTitle} setTaskDescription={setTaskDescription}/>)}
        </Grid>
      </Grid>
    </Box>
  );
}

export default TaskTracerCalendarComponent;