import React, { useState } from 'react';
import TaskTracerLoginComponent from "../../components/shared/login/TaskTracerLoginComponent";
import TaskTracerSignUpComponent from "../../components/shared/singup/TaskTracerSignUpComponent";

interface TaskTracerLoginPageProps {
  setIsLoggedIn: Function;
  userData: {
    username: string;
    connected: boolean;
    password: string;
  };
  setUserData: Function;
}

const TaskTracerLoginPage: React.FC<TaskTracerLoginPageProps> = (props) => {
  const { setIsLoggedIn, userData, setUserData } = props;
  const [showLogin, setShowLogin] = useState<boolean>(true);

  return (
    <>
      {showLogin ? (
        <TaskTracerLoginComponent setIsLoggedIn={setIsLoggedIn} userData={userData} setUserData={setUserData} setShowLogin={setShowLogin}/>
      ) : (
        <TaskTracerSignUpComponent setShowLogin={setShowLogin}/>
      )}
    </>
  );
};

export default TaskTracerLoginPage;
