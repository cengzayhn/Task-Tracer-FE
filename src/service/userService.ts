import axios from "axios";

const baseURL = 'http://localhost:8081/task-tracer/';
const userURL = 'user/';

export const createUser = async (name: string, surname: string, username: string, password: string ) => {
    const requestBody = {
        name: name,
        surname: surname,
        username: username,
        password: password
    }
    try{
        const response = await axios.post(baseURL+userURL+'create',requestBody);
        return response.data; 
    }catch(error){
        console.error("User creation error :", error);
        throw error;
    }
}

export const authenticateUser = async (username: string, password: string ) => {
    const requestBody = {
        username: username,
        password: password
    }
    try{
        const response = await axios.post(baseURL+userURL+'authenticate',requestBody);
        return response.data; 
    }catch(error){
        console.error("Authentication error :", error);
        throw error;
    }
}