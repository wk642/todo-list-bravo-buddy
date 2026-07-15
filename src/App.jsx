import './App.css'
import TodoList from './TodoList';

function App() {
  // Adding array todoList with 3 empty objects
  const todoList = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
  ]
  // keys are id and title
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  )
}

export default App
