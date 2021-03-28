import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid";

export default function Todoform({ addTodo }) {
  const [todo, setTodo] = useState({
    id:"",
    task:"",
    completed: false
  })

  function handleTodoInput(e) {
    const {value} = e.target
    setTodo({...todo, task: value});
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(todo.task !== "") { 
      addTodo({...todo, id: uuidv4()});
    }
    //reset form
    setTodo({...todo, task:""})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="todo"
        type="text"
        value={todo.task} 
        onChange={handleTodoInput} 
        placeholder="add details"
      />
      <button type="submit">Add</button>
    </form>
  )
}