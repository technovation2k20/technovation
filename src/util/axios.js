import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tech-novation.herokuapp.com/'
});

export default instance;
