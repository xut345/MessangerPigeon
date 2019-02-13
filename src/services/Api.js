import axios from 'axios'
export default () => {
    return axios.create({
        baseURL: process.env.API_URL || 'http://35.226.71.20:2091'
    })
}