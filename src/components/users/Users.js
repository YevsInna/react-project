import {useEffect, useState} from 'react'
import {getUsers} from "../../servises/API";
import User from "../user/User";
import {Route, Switch} from 'react-router-dom';
import UserPosts from "../userPosts/UserPosts";

export default function Users(props) {
    const [users,setUsers]= useState([])
    useEffect(()=>{
       getUsers().then(value => setUsers([...value.data]));
    },[])
    return (
        <div>{
            users.map(value => <User key={value.id} item={value}/>)
        }
         <Switch>
             <Route path={'/users/:id/posts'} component={UserPosts}></Route>
         </Switch>
        </div>
    );
}
