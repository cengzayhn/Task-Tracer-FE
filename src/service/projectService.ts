import axios from "axios";

const baseURL = 'http://localhost:8081/task-tracer/';
const projectURL = 'project/';

export const createProject = async (name: string ) => {
    const requestBody = {
        name: name,
        taskIdList: [],
        memberIdList: []
    }
    try{
        const response = await axios.post(baseURL+projectURL+'create',requestBody);
        return response.data; 
    }catch(error){
        console.error("Project creation error :", error);
        throw error;
    }


}