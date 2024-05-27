import axios from 'axios';


const baseURL = 'http://localhost:8081/task-tracer/';
const taskURL = 'task/';

export const createTask = async (projectId: string, title:string, description:string, createdBy:string, createdDate:string) => {
    const requestBody = {
        projectId: projectId,
        title: title,
        description: description,
        createdBy: createdBy,
        createdDate: createdDate
    }
    try{
        const response = await axios.post(baseURL+taskURL+'create', requestBody);
        console.log("task created :", response)
        return response.data;
    }catch(error){
        console.error("Task creation error :", error);
        throw error;
    }
}

export const updateTask = async (id:string ,title:string, description:string) => {
    const requestBody = {
        id: id,
        title: title,
        description: description,
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

export const updateTaskState = async (id:string , state:string) => {
    const requestBody = {
        id: id,
        state: state
    }
    try{
        const response = await axios.put(baseURL+taskURL+'update', requestBody);
        console.log(response)
        return response.data;
    }catch(error){
        console.error("Task update state error :", error);
        throw error;
    }
}

export const getTasksByProjectAndDate = async (projectId: string, createdDate: string) => {
    try{
        const response = await axios.get(baseURL+taskURL+projectId+'/'+createdDate);
        console.log("fetching filtered tasks..", response);
        return response.data;
    }catch(error){
        console.error("Fetching filtered tasks error", error);
        throw error;
    }
}