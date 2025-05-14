import { useState } from "react"
const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(myEvent) => {
                console.log(myEvent.target.value)
                setText(myEvent.target.value)
            }} />
            <button type="submit" className="todoButton" >Add</button>
        </form>
    )
}

export default TodoInput