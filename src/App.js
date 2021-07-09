import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div>
                <div className='menu'>
                    <Link to={'/'}>HOME PAGE</Link>
                    <Link to={'/users'}>USERS PAGE</Link>
                    <Link to={'/posts'}>POSTS PAGE</Link>
                    <Link to={'/comments'}>COMMENTS PAGE</Link>
                </div>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'} component={Comments}/>

                </Switch>
            </div>
        </Router>

    );
}

export default App;
