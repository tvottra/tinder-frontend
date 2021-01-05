import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-2021-backend.herokuapp.com'
});

export default instance;
