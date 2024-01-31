import React from 'react';
import './App.css';
import TaskTracerSignUpComponent from './components/shared/singup/TaskTracerSignUpComponent';
import FormContainer from './container/FormContainer';
import TaskTracerLoginComponent from './components/shared/login/TaskTracerLoginComponent';

function App() {
  const WrappedSignUpComponent = FormContainer(TaskTracerLoginComponent);

  return (
    <div className="App">
      <WrappedSignUpComponent />
    </div>
  );
}

export default App;
