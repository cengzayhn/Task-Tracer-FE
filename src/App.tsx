import React, { useState } from 'react';
import './App.css';
import TaskTracerHeaderComponent from './components/shared/header/TaskTracerHeaderComponent';
import TaskTracerFooterComponent from './components/shared/footer/TaskTracerFooterComponent';
import TaskTracerNotFoundPage from './pages/notFound/TaskTracerNotFoundPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TaskTracerProjectsPage from './pages/projects/TaskTracerProjectsPage';
import TaskTracerChatPage from './pages/chat/TaskTracerChatPage';
import TaskTracerCalendarPage from './pages/calendar/TaskTracerCalendarPage';
import TaskTracerDashboardPage from './pages/dashboard/TaskTracerDashboardPage';
import PrivateRoute from './components/shared/route/PrivateRoute';
import TaskTracerLoginPage from './pages/login/TaskTracerLoginPage';

function App() {
  const [username, setUsername] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projectId, setProjectId] = useState<string>("");

  return (
    <div className="App">
      <Router>
        {isLoggedIn && projectId.length >= 1 && <TaskTracerHeaderComponent projectId={projectId} username={username} setUsername={setUsername}/>}
        <Routes>
          <Route path="/login" element={<TaskTracerLoginPage setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />} />
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/" element={isLoggedIn ? <Navigate to="/projects" /> : <Navigate to="/login" />} />
            <Route path="/projects" element={<TaskTracerProjectsPage projectId={projectId} setProjectId={setProjectId}/>} />
            <Route path="/projects/:projectId" element={<TaskTracerDashboardPage projectId={projectId}/>} />
            <Route path="/projects/:projectId/chat" element={<TaskTracerChatPage username={username} projectId={projectId}/>} />
            <Route path="/projects/:projectId/calendar" element={<TaskTracerCalendarPage username={username} projectId={projectId}/>} />
          </Route>
          <Route path="*" element={<TaskTracerNotFoundPage />} />
        </Routes>
        {isLoggedIn && projectId.length >= 1 &&  <TaskTracerFooterComponent />}
      </Router>
    </div>
  );
}

export default App;
