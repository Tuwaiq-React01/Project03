import axios from 'axios';
const KEY = 'AIzaSyD8_QN8Y_yoJXl-866gRqLbFtZML-njxLk'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})