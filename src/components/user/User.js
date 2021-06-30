export default function User({item}) {
    return (
        <div className='user'>
            <h3>{item.id} - {item.name}</h3>
            <div className='info'>
                <p>{item.username}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
                <p>{item.website}</p>
            </div>
        </div>
    );
}
