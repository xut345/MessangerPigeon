import axios from 'axios'
export default () => {
    console.log(process.env);
    return axios.create({
        baseURL: 'http://localhost:2091'
    })
}