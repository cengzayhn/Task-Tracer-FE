import './App.css';
import TaskTracerHeaderComponent from './components/shared/header/TaskTracerHeaderComponent';
import TaskTracerFooterComponent from './components/shared/footer/TaskTracerFooterComponent';
import TaskTracerNotFoundPage from './pages/notFound/TaskTracerNotFoundPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskTracerProjectsPage from './pages/projects/TaskTracerProjectsPage';
import TaskTracerChatPage from './pages/chat/TaskTracerChatPage';
import TaskTracerCalendarPage from './pages/calendar/TaskTracerCalendarPage';
import TaskTracerDashboardPage from './pages/dashboard/TaskTracerDashboardPage';


function App() {
  return (
    <div className="App">
         <Router>
        <TaskTracerHeaderComponent />
        <Routes>
          <Route path="/" element={<TaskTracerDashboardPage/>} />
          <Route path="/projects" element={<TaskTracerProjectsPage/>} />
          <Route path="/chat" element={<TaskTracerChatPage/>} />
          <Route path='/calendar' element={<TaskTracerCalendarPage/>}/>
          <Route path="*" element={<TaskTracerNotFoundPage />} />
        </Routes>
        <TaskTracerFooterComponent />
      </Router>
    </div>
  );
}

export default App;
