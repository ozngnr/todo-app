import React from 'react';

export default function Todo({todo, onChange, onClick, tab}) {
  return (
    <li className="todo-list-item" >
      <label className="todo-container">
        <input type="checkbox" checked={todo.completed} onChange={onChange}/>
        <span className="material-icons-round checkmark">check</span>
        <span className="todo-list-item_text">{todo.task}</span>
      </label>
        {(tab === "completed") && 
        <span onClick={onClick} tabIndex="0" className="material-icons-round delete-icon">delete_outline</span>}
    </li>
  )
}