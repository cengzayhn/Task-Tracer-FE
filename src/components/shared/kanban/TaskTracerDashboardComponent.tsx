import React from 'react';
import TaskTracerKanbanColumn from './components/TaskTracerKanbanColumn';
import { Grid, Typography } from '@mui/material';
import './styles.css';
import { IState } from '../../../modal/State';
import { ITask } from '../../../modal/Task';
import { getTasksByProjectId } from '../../../service/taskService';

interface TaskTracerDashboardComponentProps {
  projectId: string;
  projectName: string;
}

const TaskTracerDashboardComponent: React.FC<TaskTracerDashboardComponentProps> = (props) => {
  const { projectId, projectName} = props;
  const [tasks, setTasks] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await getTasksByProjectId(projectId);
        setTasks(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
  
    fetchData();
  }, [projectId]);
  

  const handleTaskStatusChange = (taskId: string, newState: IState) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, state: newState } : task
      )
    );
  };

  return (
    <React.Fragment>
      <Grid container className='kanban-container'>
        <Grid item xs={1}/>
        <Grid item xs={10} style={{marginTop:'10px'}}>
          <div className='project-url'>
              <Typography variant='h5' className='project-name'>
                projects/ {projectName.toLowerCase()}
              </Typography>
            </div>
            <Grid container spacing={3} style={{marginTop:'10px'}}>
              {Object.values(IState).map((state) => (
                <Grid item xs={3} key={state}>
                  <TaskTracerKanbanColumn
                    status={state as IState}
                    tasks={tasks.filter(task => task.state === state)}
                    onTaskStatusChange={handleTaskStatusChange}
                  />
                </Grid>
              ))}
            </Grid>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    </React.Fragment>
  );
};

export default TaskTracerDashboardComponent;
