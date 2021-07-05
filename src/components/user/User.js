import {getUserPosts} from "../../servises/API";
import {useState} from "react";
import Post from "../post/Post";

export default function User ({singleUser}) {
    const [posts, setPosts] = useState(null);

    return (
        <div className='user'>
            <h3>{singleUser.id} - {singleUser.name}</h3>

            <div>
                <p>{singleUser.username}</p>
                <p>{singleUser.email}</p>
                <p>{singleUser.phone}</p>
                <p>{singleUser.website}</p>
                <button onClick={() => getUserPosts (singleUser.id).then(value => setPosts(value.data))}>
                    Show posts
                </button>
            </div>
            <div>
                {
                  posts && posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}
