export default function Post({item}) {
    return (
        <div className='post'>
            <h3>Post {item.id}</h3>
            <p>{item.body}</p>
        </div>
    );
}
