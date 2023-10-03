import axios from 'axios';
const REST_API_URL = 'http://localhost:8080/api';

function Api() {
    const api = axios.create({
        baseURL: REST_API_URL,
    });
}
export default Api;
