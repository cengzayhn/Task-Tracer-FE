import './App.css';
import TaskTracerHeaderComponent from './components/shared/header/TaskTracerHeaderComponent';
import TaskTracerFooterComponent from './components/shared/footer/TaskTracerFooterComponent';
import TaskTracerNotFoundPage from './pages/notFound/TaskTracerNotFoundPage';
import TaskTracerDashboardContainer from './container/dashboard/TaskTracerDashboardContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskTracerProjectsPage from './pages/projects/TaskTracerProjectsPage';

function App() {
  const defaultDate = new Date('2024-03-01')
  return (
    <div className="App">
         <Router>
        <TaskTracerHeaderComponent />
        <Routes>
          <Route path="/" element={<TaskTracerDashboardContainer/>} />
          <Route path="/projects" element={<TaskTracerProjectsPage/>} />
          <Route path="/teams" element={<>teams</>} />
          <Route path="*" element={<TaskTracerNotFoundPage />} />
        </Routes>
        <TaskTracerFooterComponent />
      </Router>
    </div>
  );
}

export default App;
