import {useEffect} from "react";
import {getUsers} from "../../servises/API";
import {useDispatch, useSelector} from "react-redux";
import User from "../user/User";

export default function Users (props){
    const users = useSelector(({users})=>users)
    const dispatch = useDispatch()
    useEffect(()=>{
        getUsers().then(value => dispatch({
            type: 'USERS',
            payload: value.data
        }))
    },[])

    return (
        <div>
            {
                users.map(value=><User key={value.id} item={value}/>)
            }
        </div>
    );
}
