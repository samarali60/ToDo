import { useState } from "react"
import TodoInput from "../TodoInput"
import TodoItem from "../TodoItem"
import { v4 as uuid } from 'uuid';
const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const addTodo = (text) => {
        setTodos([...todos, { text, completed: false }])
    }

    const toggleTodo = (idx) => {
        //get index
        const newTodos = [...todos]
        newTodos[idx].completed = !newTodos[idx].completed
        setTodos(newTodos)
    }

    const deleteTodo = (idx) => {
        const newTodos = [...todos]
        newTodos.splice(idx, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <TodoInput addTodo={addTodo} />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos.map((todo, idx) => {
                    return <TodoItem
                        key={uuid()}
                        todo={todo}
                        index={idx}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo} />
                })}
            </ul>
        </>
    )
}

export default TodoApp