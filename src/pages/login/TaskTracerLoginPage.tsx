import React, { useState } from 'react';
import TaskTracerLoginComponent from "../../components/shared/login/TaskTracerLoginComponent";
import TaskTracerSignUpComponent from "../../components/shared/singup/TaskTracerSignUpComponent";

interface TaskTracerLoginPageProps {
  setIsLoggedIn: Function;
  username: string;
  setUsername: Function;
}

const TaskTracerLoginPage: React.FC<TaskTracerLoginPageProps> = (props) => {
  const { setIsLoggedIn, username, setUsername } = props;
  const [showLogin, setShowLogin] = useState<boolean>(true);

  return (
    <>
      {showLogin ? (
        <TaskTracerLoginComponent setIsLoggedIn={setIsLoggedIn} setShowLogin={setShowLogin} username={username} setUsername={setUsername}/>
      ) : (
        <TaskTracerSignUpComponent setShowLogin={setShowLogin}/>
      )}
    </>
  );
};

export default TaskTracerLoginPage;
