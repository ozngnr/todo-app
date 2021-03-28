import React from 'react';
import Todo from "./Todo";

export default function TodoList({todos, completeTodo, removeTodo, removeAll, tab}) {
  return (
    <>
    <ul className="todo-list">
      {todos.map(todo => (
          <Todo 
            key={todo.id} 
            tab={tab} 
            todo={todo} 
            onChange={() => completeTodo(todo.id)}
            onClick={() => removeTodo(todo.id)}
          />
      ))}
    </ul>
    {(tab === "completed") && 
    <button onClick={() => removeAll()} className="delete-button">Delete All</button>}
    </>
  )
}