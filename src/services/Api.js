import axios from 'axios'
export default () => {
    return axios.create({
        baseURL: process.env.NODE_ENV === 'production' ? 'http://35.226.71.20:2091' : 'http://35.226.71.20:2091'
    });
}
