import React, { Dispatch, SetStateAction, useState } from 'react'
import TodoService from '../TodoService'
import TodoTypes from '../todo'
import '../styles/TodoForm.css'

interface TodoFormProps {
    setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}
const TodoForm: React.FC<TodoFormProps> = ({ setTodos }) => {
    const [newTodoText, setNewTodoText] = useState<string>("");
    //function to handle add todo action
    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") {
            const newTodo = TodoService.addTodo(newTodoText);
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setNewTodoText("");
        }
    };
    return (
        <div className="inputForm">
            <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} autoFocus={true} placeholder='Add Task' />
 
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}

export default TodoForm