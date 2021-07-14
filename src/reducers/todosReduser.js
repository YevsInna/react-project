import {ADD_TODOS, DELETE, PUSH_NEW_TODO, SET_LOADING_FALSE, SET_LOADING_TRUE} from "../redux/actionTypes";

const initialState = {
    todos:[],
    isLoading: false
}
export const todosReducer = (state=initialState, action)=>{
switch (action.type){
    case ADD_TODOS:{
        return {
            ...state, todos: action.payload
        }
    }

    case SET_LOADING_TRUE:{
        return {
            ...state, isLoading: true
        }
    }

    case SET_LOADING_FALSE:{
        return {
            ...state, isLoading: false
        }
    }

    case PUSH_NEW_TODO:{
        return {
            ...state, todos: [...state.todos, action.payload]
        }
    }

    case DELETE:{
        return {
            todos: []
        }
    }
    default:
        return state
}
}
