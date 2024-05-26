import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import './styles.css';
import { createUser } from '../../../service/userService';
import { IUser } from '../../../modal/User';

interface TaskTracerSignUpComponentProps {
  setShowLogin: Function;
}

const TaskTracerSignUpComponent: React.FC<TaskTracerSignUpComponentProps> = ({ setShowLogin }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try{
      const user:IUser = await createUser(name, surname, username, password);
      console.log("User created :", user);
      setName('');
      setSurname('');
      setUsername('');
      setPassword('');
      window.location.href = '/login';
    }catch(error){
      console.error("Error occured while creating user", error)
    }

  };

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
              <TextField
                className="input-textfield"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signup-input-container">
              <Typography className="input-label">Surname</Typography>
              <TextField
                className="input-textfield"
                variant="outlined"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="signup-input-container">
              <Typography className="input-label">Username</Typography>
              <TextField
                className="input-textfield"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="signup-input-container">
              <Typography className="input-label">Password</Typography>
              <TextField
                className="input-textfield"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Typography className="input-text">
              Already have an account? <span className="input-login" onClick={() => setShowLogin(true)}>Login</span>
            </Typography>
            <Button
              variant="contained"
              color="success"
              size="large"
              className="signup-button"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskTracerSignUpComponent;
