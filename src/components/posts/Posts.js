import {useEffect, useState} from "react";
import Post from "../post/Post";


export default function Posts(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromServer => {
                setPosts(postsFromServer);
            });
    }, [])

    return (
        <div>
            {
                posts.map(posts => <Post key={posts.id} item={posts}/>)
            }
        </div>
    );
}
