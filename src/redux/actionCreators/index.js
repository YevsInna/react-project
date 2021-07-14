import {ADD_TODOS, DELETE, PUSH_NEW_TODO, SET_LOADING_FALSE, SET_LOADING_TRUE} from "../actionTypes";

export const setLoadingTrue = ()=>({type: SET_LOADING_TRUE})
export const setLoadingFalse = ()=>({type: SET_LOADING_FALSE})
export const addTodos = (payload)=>({type: ADD_TODOS, payload})
export const pushNewTodo = (payload)=>({type:PUSH_NEW_TODO, payload})
export const deleteTodo = (payload)=> ({type: DELETE, payload})
