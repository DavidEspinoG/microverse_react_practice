import { useState } from "react";
import "../styles/TodoInput.css";

const TodoInput = ({ setTodos, todos }) => {
  const [ title, setTitle ] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const getId = (state) => {
    const ids = state.map(element => element.id)
    const max = Math.max(...ids);
    return max + 1
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === ''){
      alert('Please add content to the todo')
    } else {
      setTodos((prevState) => {
        const newState = [...prevState]
        const newTodo = {
          id: getId(prevState),
          title: title,
          completed: false
        }
        newState.push(newTodo);
        return newState;
      })
    }
  }
  return(
    <form onSubmit={handleSubmit} className="form">
      <input 
        className="input"
        placeholder="Add todo " 
        value={title}
        onChange={(e) => handleChange(e)}
      />
      <div className="button-container">
        <button 
          type="submit"
          className="button"
        >
            Submit
        </button>
      </div>
     
    </form>
  )
}

export default TodoInput;