import React from 'react';
import './styles.css';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const TaskTracerLoginComponent = () => {
    return (
      <>
        <Grid container className='input-container'>
          <Grid item xs={12} className='input-form'>
            <div className='signup-input-container' >
              <Typography className='input-label'>
                email
              </Typography>
              <TextField className='input-textfield'></TextField>
            </div>
            <div className='input-input-container' >
              <Typography className='input-label'>
                password
              </Typography>
              <TextField className='input-textfield'></TextField>
            </div>
            <div className='input-text'>
              Don't have an account ? <span className='input-login'> sign up </span>
            </div>
            <Button variant='contained' color='success'  size='large'>
              Login
            </Button>
          </Grid>          
        </Grid> 
        <div className='logo-container'>
            <img src="/resources/TaskTracerLogo.jpeg" className='tasktracer-logo' alt="Task Tracer Logo" /> <span className='tasktracer-name'>TaskTracer</span>
        </div>
      </>      
      
      );
};

export default TaskTracerLoginComponent;
