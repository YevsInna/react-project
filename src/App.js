import './App.css';
import { useEffect, useState } from 'react';
import { getUserPosts, getUsers } from "./servises/API";
import Users from "./components/users/Users";
import UserPost from "./components/userPost/UserPost";

export default function App() {
    const [userPosts, setUserPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const appFn = (id) => {
        getUserPosts(id).then(value => setUserPosts(value.data));
    }

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            <Users items={users} appFn={appFn}/>
            <hr/>
            {
                userPosts.map((value) => {
                    return <UserPost key={value.id} item={value}/>
                })
            }
        </div>
    );

}
