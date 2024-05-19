import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import './styles.css';

interface TaskTracerSignUpComponentProps {
  setShowLogin: Function;
}

const TaskTracerSignUpComponent:React.FC<TaskTracerSignUpComponentProps> = ({setShowLogin}) => {
  return (
    <div className="signup-container">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} lg={4}>
          <div className="form-container">
          <div className="logo-container">
            <img src="/resources/TaskTracerLogo.jpeg" className="tasktracer-logo" alt="Task Tracer Logo" />
            <span className="tasktracer-name">TaskTracer</span>
          </div>
            <Typography variant="h5" className="form-title">
              Sign Up for TaskTracer
            </Typography>
            <div className="signup-input-container">
              <Typography className="input-label">Name</Typography>
              <TextField className="input-textfield" variant="outlined" />
            </div>
            <div className="signup-input-container">
              <Typography className="input-label">Surname</Typography>
              <TextField className="input-textfield" variant="outlined" />
            </div>
            <div className="signup-input-container">
              <Typography className="input-label">Email</Typography>
              <TextField className="input-textfield" variant="outlined" />
            </div>
            <div className="signup-input-container">
              <Typography className="input-label">Password</Typography>
              <TextField className="input-textfield" type="password" variant="outlined" />
            </div>
            <Typography className="input-text">
              Already have an account? <span className="input-login" onClick={()=> setShowLogin(true)}>Login</span>
            </Typography>
            <Button variant="contained" color="success" size="large" className="signup-button">
              Sign Up
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskTracerSignUpComponent;
