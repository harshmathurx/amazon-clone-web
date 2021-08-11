import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-42e39/us-central1/api' //API URL from cloud function
});

export default instance;