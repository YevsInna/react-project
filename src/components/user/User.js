export default function User({item, fnFather}) {
    return (
        <div className='users'>
            <div className='user'>{item.id} - {item.name} </div>
            <button className='btn' onClick={()=> fnFather(item.id)}>Show posts</button>
        </div>
    );
}
