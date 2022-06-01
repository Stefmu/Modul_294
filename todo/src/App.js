import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  let [todos, setTodos] = useState([]);

  useEffect(() => intialize(), []);

  function intialize() {
    getTodos();
  }

  function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => setTodos(json));
  }

  return (
    <div className="App">

        <h1>Anzahl Todos: {todos.length}</h1>
        <h2 style={{color: "red"}}>davon offen: {todos.filter((todo) => !todo.completed).length}</h2>
        <h2 style={{color: "green"}}>davon geschlossen: {todos.filter((todo) => todo.completed).length}</h2>

        {todos.map(todo =>
            <section style={{backgroundColor: todo.completed ? "green" : "red"}}>
              <h3>{todo.title}</h3>
            </section>
        )}

    </div>
  );
}

export default App;
