import './App.css';
import {useEffect, useState} from 'react';
import {getPost, getPosts} from "./servises/API";
import Posts from "./posts/Posts";

function App() {

    const [post, setPost] = useState(null);

    const appFn = (id) => {
        getPost(id).then(value => setPost(value.data));
    }

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value.data));
    }, []);


    return (

        <div>
            <Posts items={posts} appFn={appFn}/>
            <hr/>
            {post && <div>{JSON.stringify(post)}</div>};
            <hr/>
        </div>
    );
}

export default App;
