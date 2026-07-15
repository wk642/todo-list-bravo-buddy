import './App.css'

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
      <h1>My Todos</h1>
      {/* create an unordered list */}
      <ul>
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default App
