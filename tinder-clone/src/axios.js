import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-mern-project.herokuapp.com/'
})

export default instance;