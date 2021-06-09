import axios from 'axios';

const Api = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '720164f9fdc4dd54dd9475422f8911b3';

export const WeaterData = async (cityname) => {
    try{
        const {data} = await axios.get(Api + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}

export default WeaterData ;