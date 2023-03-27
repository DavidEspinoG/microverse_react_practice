import { useState } from "react"
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  return (
  <>
    <TodoInput todos={todos} setTodos={setTodos}/>
    <ul>
      {todos.map(element => <TodoItem 
        key={element.id} 
        title={element.title} 
        checked={element.completed}
        id={element.id}
        setTodos={setTodos}
      />)}
    </ul>
  </>
  )
}

export default TodosLogic