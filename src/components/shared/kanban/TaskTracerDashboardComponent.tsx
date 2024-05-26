import React from 'react';
import TaskTracerKanbanColumn from './components/TaskTracerKanbanColumn';
import { Grid } from '@mui/material';
import './styles.css';
import { IState } from '../../../modal/State';
import { ITask } from '../../../modal/Task';
import { getTasksByProjectId } from '../../../service/taskService';

interface TaskTracerDashboardComponentProps {
  projectId: string;
}

const realData: ITask[] = [
  { projectId: 'project_id_1', id: '1', title: 'Ödevler yapılacak', description: 'Bu bir açıklamadır 1.', createdBy: 'user_1', createdDate: '2024-05-25', state: IState.TODO },
  { projectId: 'project_id_2', id: '2', title: 'Projeler yapılacak', description: 'Bu bir açıklamadır 2.', createdBy: 'user_2', createdDate: '2024-05-26', state: IState.IN_PROGRESS },
  { projectId: 'project_id_3', id: '3', title: 'Lorem ipsum dolor sit amet, consectetur', description: 'Bu bir açıklamadır 3.', createdBy: 'user_3', createdDate: '2024-05-27', state: IState.IN_TEST },
  { projectId: 'project_id_4', id: '4', title: 'Minus temporibus facere', description: 'Bu bir açıklamadır 4.', createdBy: 'user_4', createdDate: '2024-05-28', state: IState.DONE }
];

const TaskTracerDashboardComponent: React.FC<TaskTracerDashboardComponentProps> = (props) => {
  const { projectId } = props;
  const [tasks, setTasks] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await getTasksByProjectId("33e04a47-97cc-4641-9f9c-6f318dd32297");
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
        <Grid item xs={10}>
          <Grid container spacing={3}>
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
