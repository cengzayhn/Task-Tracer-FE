import React from 'react';
import './App.css';
import TaskTracerSignUpComponent from './components/shared/singup/TaskTracerSignUpComponent';
import FormContainer from './container/FormContainer';
import TaskTracerLoginComponent from './components/shared/login/TaskTracerLoginComponent';
import TaskTracerDashboard from './pages/dashboard/TaskTracerDashboard';
import TaskTracerHeaderComponent from './components/shared/header/TaskTracerHeaderComponent';
import TaskTracerFooterComponent from './components/shared/footer/TaskTracerFooterComponent';
import { Grid } from '@mui/material';

function App() {
  const WrappedSignUpComponent = FormContainer(TaskTracerLoginComponent);

  return (
    <div className="App">
        <Grid container className='app-container'>
          <Grid item xs={12}>
            <TaskTracerHeaderComponent/>
          </Grid>
          <Grid item xs={12} style={{height:'85vh'}}>
            <TaskTracerDashboard/>
          </Grid>          
          <Grid item xs={12}></Grid>          
          <Grid item xs={12} className='app-footer'>
            <TaskTracerFooterComponent/>
          </Grid>

        </Grid>
    </div>
  );
}

export default App;
