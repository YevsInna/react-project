export default function Post({item}) {
    return (
        <div className='post'>
            user {item.userId} post {item.id} <br/>
            {item.body}
        </div>
    );
}
