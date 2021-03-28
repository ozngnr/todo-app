import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import TodoForm from "./components/TodoForm"
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "todo-app-data"

const Home = () => {
  // STATES
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [tab, setTab] = useState("all")

  // FUNCTIONS
  function addTodo(todo) {
    setTodos([todo, ...todos])
  }

  function completeTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function removeAll() {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // useEFFECTS
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
  }, [todos])

  useEffect(() => {
    function filterTodos() {
      switch (tab) {
        case "completed":
          setFilteredTodos(todos.filter(todo => todo.completed))
          break
        case "active":
          setFilteredTodos(todos.filter(todo => !todo.completed))
          break
        default:
          setFilteredTodos(todos)
          break
      }
    }
    filterTodos()
  }, [todos, tab])

  return (
    <section>
      <h1>#todo</h1>
      <NavBar setTab={setTab} tab={tab}/>

      {tab !== "completed" &&
      <TodoForm addTodo={addTodo} todos={todos} tab={tab}/>}

      <TodoList 
        tab={tab} 
        todos={filteredTodos}
        setTodos={setTodos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo}
        removeAll={removeAll}
      />
    </section>
   )
}
 
export default Home;