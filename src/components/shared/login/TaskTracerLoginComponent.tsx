import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField, Typography } from '@mui/material';
import './styles.css';

interface TaskTracerLoginComponentProps {
  setIsLoggedIn: Function;
  setShowLogin: Function;
}

const TaskTracerLoginComponent: React.FC<TaskTracerLoginComponentProps> = (props) => {

  const [username, setUsername] = React.useState<string>("")

  const { setIsLoggedIn,setShowLogin } = props;
  const navigate = useNavigate();

  const handleLogin = () => {
    if (true) {
      navigate('/');
      setIsLoggedIn(true);
    } else {
      console.log("Invalid password or username");
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
              className="input-textfield"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              className="input-textfield"
            />
            <Typography className="input-text">
              Don't have an account? <span className="input-login" onClick={()=> setShowLogin(false)}>Sign up</span>
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
