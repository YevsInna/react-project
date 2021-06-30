export default function Post ({item}){
    return (
        <div className='post'>
            <h3>User {item.userId},post {item.id}</h3>
            <h4> {item.title}</h4>
            <p>{item.body}</p>
        </div>
    );
}
