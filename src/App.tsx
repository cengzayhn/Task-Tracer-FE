import React, { useState } from 'react';
import './App.css';
import TaskTracerHeaderComponent from './components/shared/header/TaskTracerHeaderComponent';
import TaskTracerFooterComponent from './components/shared/footer/TaskTracerFooterComponent';
import TaskTracerNotFoundPage from './pages/notFound/TaskTracerNotFoundPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TaskTracerProjectsPage from './pages/projects/TaskTracerProjectsPage';
import TaskTracerChatPage from './pages/chat/TaskTracerChatPage';
import TaskTracerCalendarPage from './pages/calendar/TaskTracerCalendarPage';
import TaskTracerDashboardPage from './pages/dashboard/TaskTracerDashboardPage';
import PrivateRoute from './components/shared/route/PrivateRoute';
import TaskTracerLoginPage from './pages/login/TaskTracerLoginPage';


function App() {
  
  const [username, setUsername] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        {isLoggedIn && <TaskTracerHeaderComponent />}
        <Routes>
          <Route path="/login" element={<TaskTracerLoginPage setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername}/>} />
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/" element={<TaskTracerDashboardPage />} />
            <Route path="/projects" element={<TaskTracerProjectsPage />} />
            <Route path="/chat" element={<TaskTracerChatPage username={username}/>} />
            <Route path="/calendar" element={<TaskTracerCalendarPage />} />
          </Route>
          <Route path="*" element={<TaskTracerNotFoundPage />} /> 
        </Routes>
        {isLoggedIn && <TaskTracerFooterComponent />}
      </Router>
    </div>
  );
}

export default App;
