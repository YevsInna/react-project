export default function User ({item}){
    return (
        <div className='user'>
            {item.id} - {item.name} <br/>
            email - {item.email} , phone - {item.phone}
        </div>
    );
}
