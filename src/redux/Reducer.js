
const initialState = {
    users: [],
    posts: [],
    comments: [],

}
const reducer = (state= initialState, action)=>{
    switch (action.type){

        case 'USERS':{
            return{
                ...state,
                users: action.payload
            }
        }

        case 'POSTS':{
            return{
                ...state,
                posts: action.payload
            }
        }

        case 'COMMENTS':{
            return{
                ...state,
                comments: action.payload
            }
        }
        default:
            return state;
    }
}
export {reducer}
