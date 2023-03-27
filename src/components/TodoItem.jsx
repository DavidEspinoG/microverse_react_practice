import "../styles/TodoItem.css";

const TodoItem = ({ title, checked, id, setTodos }) => {
  const handleChange = (id) => {
    setTodos((prevState) => 
      prevState.map(element => {
        if(element.id === id){
          return {
            ...element,
            completed: !element.completed
          }
        }
        return element;
      })
    )
  }
  const handleDelete = id => {
    setTodos((prevState) => 
      prevState.filter(element => element.id !== id)
    )
  }
  return (
    <li>
      <input 
        type="checkbox" 
        checked={checked}
        onChange={() => {handleChange(id)}}
      />
      {title}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  )
}

export default TodoItem;
