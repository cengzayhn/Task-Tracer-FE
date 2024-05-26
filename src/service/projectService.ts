import axios from "axios";

const baseURL = 'http://localhost:8081/task-tracer/';
const projectURL = 'project/';

export const createProject = async (name: string, usernameList: string[] ) => {
    const requestBody = {
        name: name,
        taskIdList: [],
        usernameList: usernameList
    }
    try{
        const response = await axios.post(baseURL+projectURL+'create',requestBody);
        return response.data; 
    }catch(error){
        console.error("Project creation error :", error);
        throw error;
    }
}

export const getProjectsByUsername = async (username: string) => {
    try{
        const response = await axios.get(baseURL + projectURL + username + '/by-username');
        return response.data;
    }catch(error){
        console.error("Get projects by username error :", error);
        throw error;
    }
}