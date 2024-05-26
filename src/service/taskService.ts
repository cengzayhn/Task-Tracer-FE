import axios from 'axios';


const baseURL = 'http://localhost:8081/task-tracer/';
const taskURL = 'task/';

export const createTask = async (title:string, description:string, createdBy:string, createdDate:string) => {
    const requestBody = {
        title: title,
        description: description,
        createdBy: createdBy,
        createdDate: createdDate
    }
    try{
        const response = await axios.post(baseURL+taskURL+'create', requestBody);
        return response.data;
    }catch(error){
        console.error("Task creation error :", error);
        throw error;
    }
}

export const updateTask = async (id:string ,title:string, description:string, createdBy:string, state:string) => {
    const requestBody = {
        id: id,
        title: title,
        description: description,
        createdBy: createdBy,
        state: state
    }
    try{
        const response = await axios.put(baseURL+taskURL+'update', requestBody);
        return response.data;
    }catch(error){
        console.error("Task update error :", error);
        throw error;
    }
}

export const getTasksByProjectId = async(projectId: string) => {
    try{
        const response = await axios.get(baseURL+taskURL+projectId+'/by-projectId');
        return response.data;
    }catch(error){
        console.log("Get tasks by projectId error : ", error);
        throw error;
    }
}