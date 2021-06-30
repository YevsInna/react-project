import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';


function App() {


    return (

        <Router>

            <div>
                <div className='links'><Link to={'/users'}>to users page</Link>
                    <br/>
                    <Link to={'/posts'}>to posts page</Link>
                    <br/>
                    <Link to={'/comments'}>to comments page</Link>
                    <br/></div>

                <Switch>
                    <Route exact path = {'/users'} component = {Users}/>;
                    <Route exact path = {'/posts'} component = {Posts}/>;
                    <Route exact path = {'/comments'} component = {Comments}/>;

                </Switch>
            </div>
        </Router>
    );
}

export default App;
