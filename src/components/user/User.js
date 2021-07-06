import {Link} from 'react-router-dom';

export default function User({item, item: {name,id}}) {
    return (
        <div className='user'>
            <div>{item.name}</div>  <div><Link to={'/users/' + item.id}>user details</Link></div>
        </div>

    );
}
