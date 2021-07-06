import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {getUserDetails} from "../../servises/API";

export default function UserDetails(props) {
    let {id} = useParams();
    let [user,setUser]= useState({});
    useEffect(()=>{
        getUserDetails(id).then(value => setUser({...value.data}));
    },[id]);

        return (
        <div className='details'>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
        </div>
    );
}
