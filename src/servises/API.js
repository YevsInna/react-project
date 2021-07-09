import axios from 'axios';
const options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};
const axiosInstance = axios.create(options);
const getUsers = ()=> axiosInstance('users');
const getPosts = ()=> axiosInstance('posts');
const getComments = ()=> axiosInstance('comments');
export {getUsers,getPosts,getComments}
