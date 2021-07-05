import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from './components/users/Users'
import Posts from "./components/posts/Posts";

function App() {
    return (
        <Router>
            <div>
                <div className='links'>
                    <Link to={'/users'}>to users page</Link>
                    <Link to={'/posts'}>to posts page</Link>
                </div>

                <Switch>
                    <Route exact path={'/users'} render={() => <Users/>}/>;
                    <Route exact path={'/posts'} render={() => <Posts/>}/>;
                </Switch>
            </div>
        </Router>
    );
}

export default App;
