import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function Comments(props) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFromServer => {
                setComments(commentsFromServer);
            });
    }, [])

    return (
        <div>
            {
                comments.map(comments => <Comment key={comments.id} item={comments}/>)
            }
        </div>
    );
}
