import {useEffect, useState} from "react";
import {getPosts} from "../../servises/API";
import Post from "../post/Post";

export default function Posts (){
   const [posts, setPosts] = useState(null);

   useEffect(()=>{
       getPosts().then(value => setPosts(value.data));
   }, [])

    return (
        <div>
            {
              posts
                  ? posts.map((value) => <Post item={value} key={value.id}/>)
                  : 'Loading...'
            }
        </div>
    );
}
