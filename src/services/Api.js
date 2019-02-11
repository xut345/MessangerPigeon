import axios from 'axios'
export default () => {
    return axios.create({
        baseURL: process.env.NODE_ENV === 'production' ? 'http://35.224.82.158:8080' : 'http://localhost:2091'
    });
}