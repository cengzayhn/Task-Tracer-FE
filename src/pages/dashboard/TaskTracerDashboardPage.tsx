import TaskTracerDashboardContainer from '../../container/dashboard/TaskTracerDashboardContainer'
import React from 'react'

interface TaskTracerDashboardPageProps {
  projectId: string;
}
const TaskTracerDashboardPage:React.FC<TaskTracerDashboardPageProps>=(props)=> {
  return (
    <React.Fragment>
        <TaskTracerDashboardContainer {...props}/>
    </React.Fragment>
  )
}

export default TaskTracerDashboardPage