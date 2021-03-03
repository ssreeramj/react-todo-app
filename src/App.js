import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import db from "./firebase";
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({id: doc.id, text: doc.data().text})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("");
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Add a todo</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={addTodo}
        disabled={!input}
      >
        Add Task
      </Button>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
