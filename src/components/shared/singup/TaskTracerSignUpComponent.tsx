import React from 'react';
import './styles.css';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const TaskTracerSignUpComponent = () => {
    return (
      <>
        <Grid container className='signup-container'>
          <Grid item xs={12} className='signup-form'>
            <div className='signup-input-container' >
              <Typography className='input-label' style={{marginLeft:'2.3vh'}}>
                name
              </Typography>
              <TextField className='input-textfield'></TextField>
            </div>
            <div className='signup-input-container'>
              <Typography className='input-label' style={{marginLeft:'2.3vh'}}>
                surname
              </Typography>
              <TextField className='input-textfield'></TextField>
            </div>
            <div className='signup-input-container' >
              <Typography className='input-label' style={{marginLeft:'2.3vh'}}>
                email
              </Typography>
              <TextField className='input-textfield'></TextField>
            </div>
            <div className='signup-input-container' >
              <Typography className='input-label' style={{marginLeft:'2.3vh'}}>
                password
              </Typography>
              <TextField className='input-textfield'></TextField>
            </div>
            <div className='input-text'>
              already have an account ? <span className='input-login'> login </span>
            </div>
            <Button variant='contained' color='success'  size='large' style={{marginBottom:'7vh'}}>
              Sign Up
            </Button>
          </Grid>          
        </Grid> 
        <div className='logo-container'>
            <img src="/resources/TaskTracerLogo.jpeg" className='tasktracer-logo' alt="Task Tracer Logo" /> <span className='tasktracer-name'>TaskTracer</span>
        </div>
      </>      
      
      );
};

export default TaskTracerSignUpComponent;
