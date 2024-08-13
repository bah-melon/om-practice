import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://b27b-188-44-30-163.ngrok-free.app/api', 
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
    },
    timeout: 10000, 
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
