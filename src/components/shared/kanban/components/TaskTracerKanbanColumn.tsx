import React from 'react';
import '../styles.css';
import { Typography } from '@mui/material';
import TaskTracerKanbanTask from './TaskTracerKanbanTask';
import { Status } from '../TaskTracerDashboardComponent';


interface TaskTracerKanbanColumnProps {
    status?: Status;
    tasks?: { id: number, name: string, description: string, status: Status }[];
    onTaskStatusChange: Function;
}

const TaskTracerKanbanColumn: React.FC<TaskTracerKanbanColumnProps> = (props) => {
  
    const { status, tasks, onTaskStatusChange } = props;

    return (
      <React.Fragment>
        <div className='column-container'>
          <div className='column-title'>
            <Typography variant='h4'>{status}</Typography>
          </div>
          <div>
            {tasks && tasks.map((task) => (
              <TaskTracerKanbanTask
                key={task.id}
                id={task.id}
                title={task.name}
                status={task.status}
                setStatus={onTaskStatusChange}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    )
}

export default TaskTracerKanbanColumn;
