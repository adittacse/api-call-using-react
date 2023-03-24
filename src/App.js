import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  return (
    <div className="App">
        <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
    // step 1: declare useState() to store data
    const [users, setUsers] = useState([]);
    // step: 2: declare useEffect() to load data from API
    // step 3: set data to useState()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // step 4: use map() function to display each data
    return (
        <div>
            {
                users.map(user => <User name={user.name} email={user.email}></User>)
            }
        </div>
    );
}

function User(props) {
    return (
        <div style={{border: "2px solid red", margin: "20px"}}>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
        </div>
    );
}

export default App;
