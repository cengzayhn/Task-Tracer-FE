import React from "react";
import { Card, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Status } from "../TaskTracerDashboardComponent";
import TaskTracerDialog from "../../../../components/shared/task/dialog/TaskTracerDialog";
import './styles.css';

interface TaskTracerKanbanTaskProps {
  id: number;
  title: string;
  status: Status;
  setStatus: Function;
}

const TaskTracerKanbanTask: React.FC<TaskTracerKanbanTaskProps> = ({ id, title, status, setStatus }) => {

  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(id, event.target.value); 
  };

  const handleOnClick = () => {
    setOpenDialog(true);
  }

  return (
    <React.Fragment>
      <Card 
        className="task-card"
      sx={{ 
        width: '90%',
        height:'auto',
        padding: '8px', 
        marginTop:'3%', 
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft:'2%',
      }}
      onClick={handleOnClick}
      >
        <Typography variant="body1" sx={{ textAlign: 'center', flex: 1, marginBottom: 0 }}>{title}</Typography>
        <div>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={status}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ height: '24px', fontSize: '0.875rem' }}
            >
              {Object.values(Status).map((state, index
              )=>(
                <MenuItem key={index} value={state}>{state}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Card>
      <TaskTracerDialog openDialog={openDialog} taskTitle={title} taskDescription={"description"}/>
    </React.Fragment>
  );
};

export default TaskTracerKanbanTask;
