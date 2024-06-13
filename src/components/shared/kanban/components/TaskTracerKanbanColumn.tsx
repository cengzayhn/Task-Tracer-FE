import React from 'react';
import '../styles.css';
import { Typography } from '@mui/material';
import TaskTracerKanbanTask from './TaskTracerKanbanTask';
import { ITask } from '../../../../modal/Task';
import { IState } from '../../../../modal/State';

interface TaskTracerKanbanColumnProps {
  status: IState;
  tasks: ITask[];
  onTaskStatusChange: (taskId: string, newState: IState) => void;
}

const TaskTracerKanbanColumn: React.FC<TaskTracerKanbanColumnProps> = (props) => {
  const { status, tasks, onTaskStatusChange } = props;

  return (
    <React.Fragment>
      <div className='column-container'>
        <div className='column-title'>
          <Typography variant='h4'>{status.split('_').join(' ')}</Typography>
        </div>
        <div style={{paddingBottom:'3%'}}>
          {tasks.map((task) => (
            <TaskTracerKanbanTask
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.state}
              setStatus={onTaskStatusChange}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskTracerKanbanColumn;
