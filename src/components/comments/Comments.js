import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getComments} from "../../servises/API";
import Comment from "../comment/Comment";

export default function Comments (props){
    const comments = useSelector(({comments})=>comments)
    const dispatch = useDispatch()
    useEffect(()=>{
        getComments().then(value => dispatch({
            type: 'COMMENTS',
            payload: value.data
        }))
    },[])
    return (
        <div>
            {
                comments.map(value=><Comment key={value.id} item={value}/>)
            }
        </div>
    );
}
