import React,{ useState } from 'react'
import TodoTypes from '../todo'
import TodoService from '../TodoService'
import { FaEdit,FaCheck } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import TodoForm from './TodoForm'
import '../styles/TodoList.css'
const TodoList = () => {
    const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
    const [editTodoId, setEditTodoId] = useState<number | null>(null);
    const [editTodoText, setEditTodoText] = useState<string>("");
    
    // function to handle edit action
    const handleEdit = (id: number, text: string) => {
        setEditTodoId(id);
        setEditTodoText(text);
    };
    //function to handle cancel edit action
    const handleCancelEdit = () => {
        setEditTodoId(null);
        setEditTodoText("");
    }
    //function to handle save edit action
    const handleSaveEdit = (id: number) => {

        if (editTodoText.trim() !== "") {
            const updatedTodo = TodoService.updateTodo({
                id,
                text: editTodoText,
                isCompleted: false,
            });
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
            );
            setEditTodoId(null);
            setEditTodoText("");
        } 
        
        
    }
    //function to handle delete action
    const handleDelete = (id: number) => {
        TodoService.deleteTodo(id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    //function to handle edit change
    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTodoText(e.target.value);
    };
    return (
        <div className="todoContainer">
            <div>
                <TodoForm setTodos = {setTodos} />
            </div>

            <div className='todos'>
                {todos.map((todo) => (
                    <div className="items" key={todo.id}>
                        {editTodoId === todo.id ? (
                            <div className='editText'>
                                <input
                                    type="text"
                                    value={editTodoText}
                                onChange = {(e) => setEditTodoText(e.target.value)}
                                autoFocus = {true}
                                />
                                <button onClick={() => handleSaveEdit(todo.id)}>
                                    <FaCheck />
                                </button>
                                <button className='cancelBtn' onClick={handleCancelEdit}>
                                    <GiCancel />
                                </button>
                            </div>
                        ) : (
                            <div className="editBtn">
                                <span>
                                    {todo.text}
                                </span>
                                <button onClick={() => handleEdit(todo.id, todo.text)}>
                                    <FaEdit />
                                </button>
                            </div>
                        )}
                        <button onClick={() => handleDelete(todo.id)}>
                            <RiDeleteBin5Fill />
                        </button>
                
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList