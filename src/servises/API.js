import axios from 'axios';
const options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};
const axiosInstance = axios.create(options);
const getUsers = ()=> axiosInstance('users');
// const getUser = (id)=> axiosInstance('users/'+id);
const getUserDetails = (id)=> axiosInstance('users/'+id);
export {getUsers, getUserDetails};
