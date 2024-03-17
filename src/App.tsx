import React from 'react';
import './App.css';
import TaskTracerSignUpComponent from './components/shared/singup/TaskTracerSignUpComponent';
import FormContainer from './container/FormContainer';
import TaskTracerLoginComponent from './components/shared/login/TaskTracerLoginComponent';
import TaskTracerDashboard from './pages/dashboard/TaskTracerDashboard';

function App() {
  const WrappedSignUpComponent = FormContainer(TaskTracerLoginComponent);

  return (
    <div className="App">
        <TaskTracerDashboard></TaskTracerDashboard>
    </div>
  );
}

export default App;
