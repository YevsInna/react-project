import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {todosReducer} from "./reducers/todosReduser";
import {ADD_TODOS, PUSH_NEW_TODO, SET_LOADING_FALSE, SET_LOADING_TRUE} from "./redux/actionTypes";
import {addTodos, pushNewTodo, setLoadingFalse, setLoadingTrue} from "./redux/actionCreators";


const CreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false)

    const submit = async (e) => {
        e.preventDefault();
        if (!title || !description || loading) return;

        try {
            setLoading(true)
            await onSubmit(title, description)
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="title"
                onChange={({target: {value}}) => setTitle(value)}
                value={title}/>
            <br/>
            <br/>
            <input
                type="text"
                placeholder="description"
                onChange={({target: {value}}) => setDescription(value)}
                value={description}/>
            <br/>
            <br/>
            <button disabled={!title || !description || loading} type={'submit'}>create todo</button>
        </form>
    )
}

const TodoList = () => {
    const {todos, isLoading} = useSelector(({todosReducer}) => todosReducer)
    if (isLoading) return <h1>Loading....</h1>
    console.log(todos)
    return (
        <div>
            {todos.map(todo => (
                    <div>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                        <span>Created At:{todo.createdAt}</span>
                        <hr/>
                    </div>
                ))}
        </div>
    )
}


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTodos()
    }, []);
    const fetchTodos = async () => {
        try {
            dispatch(setLoadingTrue())
            const response = await fetch('http://localhost:8888/get-todos');
            const data = await response.json();
            dispatch(addTodos(data))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingFalse())
        }
    }


    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;
        const response = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        dispatch(pushNewTodo(data))
        console.log(data)
    }
    return (
        <div className='App'>
            <CreateTodoForm onSubmit={onTodoCreate}/>
            <TodoList/>
        </div>
    );
}

export default App;
