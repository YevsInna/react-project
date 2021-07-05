import {useState,useEffect} from 'react'
import {getUsers} from "../../servises/API";
import User from "../user/User";

export default function Users () {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            {
                users
                    ? users.map((value) => <User key = {value.id} singleUser={value}/>)
                    : 'Loading...'
            }
        </div>
    );
}
