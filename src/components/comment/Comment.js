export default function Comment({item}) {
    return (
        <div className='comment'>
            <h3>
                Comment {item.id} to the post {item.postId}- {item.name}
            </h3>
            <p>
                {item.body}
            </p>
        </div>
    );
}
