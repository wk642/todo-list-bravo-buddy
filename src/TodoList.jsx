// Set up a basic React component structure with:
// A function named TodoList
function TodoList() {
  // Moving Todo Logic here
  // Adding array todoList with 3 empty objects
  const todoList = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
  ]

  return (
    <ul>
      {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  )
}

// An export statement at the bottom
export default TodoList;