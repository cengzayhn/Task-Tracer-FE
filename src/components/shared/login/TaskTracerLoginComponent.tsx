import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField, Typography } from '@mui/material';
import './styles.css';
import { authenticateUser } from '../../../service/userService';

interface TaskTracerLoginComponentProps {
  setIsLoggedIn: Function;
  setShowLogin: Function;
  username: string;
  setUsername: Function;
}

const TaskTracerLoginComponent: React.FC<TaskTracerLoginComponentProps> = (props) => {
  const { setIsLoggedIn, setShowLogin, username, setUsername } = props;
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await authenticateUser(username, password);
      console.log("User authenticated:", user);
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.error("Invalid username or password", error);
      setError("Invalid username or password"); 
    }
  };

  return (
    <div className="login-container">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} lg={4}>
          <div className="form-container">
            <div className="logo-container">
              <img src="/resources/TaskTracerLogo.jpeg" className="tasktracer-logo" alt="Task Tracer Logo" />
              <span className="tasktracer-name">TaskTracer</span>
            </div>
            <Typography variant="h5" className="form-title">
              Login to TaskTracer
            </Typography>
            <TextField
              label="Email or Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-textfield"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-textfield"
            />
            {error && (
              <Typography variant="body2" color="error" className="error-message">
                {error}
              </Typography>
            )}
            <Typography className="input-text">
              Don't have an account? <span className="input-login" onClick={() => setShowLogin(false)}>Sign up</span>
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={handleLogin}
              size="large"
              className="login-button"
            >
              Login
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskTracerLoginComponent;
