import {Route, Switch, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {getUserPosts} from "../../servises/API";
import Post from "../post/Post";

export default function UserPosts(props) {
    // let {id}= useParams;
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getUserPosts().then(value => setPosts([...value.data]))
    }, []);
    return (
        <div>
            {
            posts.map(value => <Post key={value.id} item={value}/>)
        }

        </div>
    );
}
