export default function Comment({item}) {
    return (
        <div className='comment'>
            Comment {item.id} to the post {item.postId} <br/>
            {item.body}
        </div>
    );
}
