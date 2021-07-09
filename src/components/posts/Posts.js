import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts, getUsers} from "../../servises/API";
import User from "../user/User";
import Post from "../post/Post";

export default function Posts (props){
    const posts = useSelector(({posts})=>posts)
    const dispatch = useDispatch()
    useEffect(()=>{
        getPosts().then(value => dispatch({
            type: 'POSTS',
            payload: value.data
        }))
    },[])
    return (
        <div>
            {
                posts.map(value=><Post key={value.id} item={value}/>)
            }
        </div>
    );
}
