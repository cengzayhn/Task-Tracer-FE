import './App.css';
import TaskTracerHeaderComponent from './components/shared/header/TaskTracerHeaderComponent';
import TaskTracerFooterComponent from './components/shared/footer/TaskTracerFooterComponent';
import TaskTracerNotFoundPage from './pages/notFound/TaskTracerNotFoundPage';
import TaskTracerDashboardContainer from './container/dashboard/TaskTracerDashboardContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <Router>
        <TaskTracerHeaderComponent />
        <Routes>
          <Route path="/" element={<TaskTracerDashboardContainer />} />
          <Route path="/projects" element={<>projects</>} />
          <Route path="/teams" element={<>teams</>} />
          <Route path="/calendar" element={<>calendar</>} />
          <Route path="*" element={<TaskTracerNotFoundPage />} />
        </Routes>
        <TaskTracerFooterComponent />
      </Router>
    </div>
  );
}

export default App;
