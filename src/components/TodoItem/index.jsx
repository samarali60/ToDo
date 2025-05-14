import PropTypes from 'prop-types'

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
    return (
        <div>
            <li>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >{todo.text}</span>
                <button onClick={() => toggleTodo(index)}>Done</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
        </div>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.shape({
        text: PropTypes.string,
        completed: PropTypes.bool
    }).isRequired,
    index: PropTypes.number.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}





export default TodoItem