import axios from "axios";
const token = localStorage.getItem('token')
axios.interceptors.request.use(
    config => {
        config.headers.Authorization = 'bearer' + token;
        return config;
    },
    error => Promise.reject(error)
)

export default axios;