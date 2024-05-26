import React from "react";
import { Card, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './styles.css';
import { IState } from "../../../../modal/State";

interface TaskTracerKanbanTaskProps {
  id: string;
  title: string;
  status: IState;
  setStatus: (taskId: string, newState: IState) => void;
}

const TaskTracerKanbanTask: React.FC<TaskTracerKanbanTaskProps> = ({ id, title, status, setStatus }) => {

  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent) => {
    const newState = event.target.value as unknown as IState;
    setStatus(id, newState);
  };

  const handleOnClick = () => {
    setOpenDialog(true);
  };

  return (
    <React.Fragment>
      <Card 
        className="task-card"
        sx={{ 
          width: '90%',
          height: 'auto',
          padding: '8px', 
          marginTop: '3%', 
          borderRadius: '12px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: '2%',
        }}
        onClick={handleOnClick}
      >
        <Typography variant="body1" sx={{ textAlign: 'center', flex: 1, marginBottom: 0 }}>{title}</Typography>
        <div>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={status.toString()}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ height: '24px', fontSize: '0.875rem' }}
            >
              {Object.values(IState).map((state) => (
                <MenuItem key={state} value={state}>{state}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default TaskTracerKanbanTask;
