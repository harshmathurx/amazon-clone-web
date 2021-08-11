import axios from "axios";

const instance = axios.create({
    baseURL: '...' //API URL from cloud function
});

export default instance;