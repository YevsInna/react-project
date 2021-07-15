import './App.css';
import Form from "./form/Form";
import {useEffect, useState} from "react";
import UserInfo from "./userInfo/UserInfo";

function App() {
  const [users, setUsers] = useState([]);
  const [chosenUser, setChosenUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
          setUsers([...value])
        })
  }, [])


  return (
      <div>
        <div><Form users={users} setChosenUser={setChosenUser}/></div>
        {
          chosenUser && <UserInfo item={chosenUser}/>
        }
      </div>
  );

}
export default App;
