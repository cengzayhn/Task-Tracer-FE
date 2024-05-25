import React from 'react';
import TaskTracerKanbanColumn from './components/TaskTracerKanbanColumn';
import { Grid } from '@mui/material';
import './styles.css';

export enum Status{
  TODO = 'TO DO',
  IN_PROGRESS = 'IN PROGRESS',
  IN_TEST = 'IN TEST',
  DONE = 'DONE',
}

interface TaskTracerDashboardComponentProps {
  projectId: string;
}


const dummyData = [
  { id: 1, name: 'Ödevler yapılacak', description: 'Bu bir açıklamadır 1.', status: Status.TODO },
  { id: 2, name: 'Projeler yapılacak', description: 'Bu bir açıklamadır 2.', status: Status.IN_PROGRESS },
  { id: 3, name: 'Lorem ipsum dolor sit amet, consectetur', description: 'Bu bir açıklamadır 3.', status: Status.IN_TEST },
  { id: 4, name: ' Minus temporibus facere', description: 'Bu bir açıklamadır 4.', status: Status.DONE },
];

const TaskTracerDashboardComponent: React.FC<TaskTracerDashboardComponentProps> = (props) => {

  const {projectId} = props;
  const [tasks, setTasks] = React.useState(dummyData);
  const handleTaskStatusChange = (taskId: number, newStatus: Status) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container spacing={3} style={{ marginTop:'5vh' }}>
            {Object.values(Status).map((state, index) => (
              <Grid item xs={3} key={index}>
                <TaskTracerKanbanColumn
                  status={state}
                  tasks={tasks.filter(task => task.status === state)}
                  onTaskStatusChange={handleTaskStatusChange}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </React.Fragment>
  )
}

export default TaskTracerDashboardComponent;
