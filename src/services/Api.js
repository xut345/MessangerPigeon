import axios from 'axios'
export default () => {
    const apiUrl = process.env.CLOUDSDK_COMPUTE_ZONE;
    console.log(apiUrl);
    return axios.create({
        baseURL: apiUrl ? apiUrl : 'http://localhost:2091'
    })
}