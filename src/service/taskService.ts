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