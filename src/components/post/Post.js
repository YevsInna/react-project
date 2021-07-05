import {useState} from "react";
import {getPostComments} from "../../servises/API";
import Comments from "../comments/Comments";

export default function Post ({item}) {
    const [postComments, setPostComments] = useState(null);

    return (
        <div className='post'>
            <h3>User {item.userId},post {item.id}</h3>
            <h4> {item.title}</h4>
            <p>{item.body}</p>
            <button onClick={() => getPostComments(item.id).then(value => setPostComments(value.data))}>
                Show comments
            </button>
            <div>
                {
                    postComments && postComments.map(value => <Comments key={value.id} item = {value}/>)
                }
            </div>
        </div>
    );
}
