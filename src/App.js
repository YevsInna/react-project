import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";
import {useState} from "react";

const CreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

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
        } finally{
                setLoading(false)
            }
            }
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder='title'
                value={title}
                onChange={({target: {value}}) => setTitle(value)}/>
            <br/>
            <br/>
            <input
                type="text"
                placeholder='description'
                value={description}
                onChange={({target: {value}}) => setDescription(value)}/>
            <br/>
            <br/>
            <button type='submit' disabled={!title || !description || loading}>create todo</button>
        </form>
    )
}

function App() {
    const store = useSelector(state => state)
    console.log(store)

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
        console.log(data)
    }
    return (
        <div>
            <CreateTodoForm onSubmit={onTodoCreate}/>
        </div>
    );
}

export default App;
