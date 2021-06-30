import './App.css';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';


function App() {


    return (

        <Router>

            <div>
                <Link to={'/users'}>to users page</Link>
                <br/>
                <Link to={'/posts'}>to posts page</Link>
                <br/>
                <Link to={'/comments'}>to comments page</Link>
                <br/>

                <Switch>
                    <Router path = {'/users'} component = {Users}/>;
                    <Router path = {'/posts'} component = {Posts}/>;
                    <Router path = {'/comments'} component = {Comments}/>;

                </Switch>


            </div>
        </Router>
    );
}

export default App;
