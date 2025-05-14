import { useState } from "react"
import styles from './style.module.css'
const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('')

   const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
        addTodo(text)
        setText('')
    }
}

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.todoInput} type="text" value={text} onChange={(myEvent) => {
                console.log(myEvent.target.value)
                setText(myEvent.target.value)
            }} />
            <button type="submit" className={styles.todoButton} >Add</button>
        </form>
    )
}

export default TodoInput