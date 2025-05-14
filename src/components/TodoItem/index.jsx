import PropTypes from 'prop-types'
import styles from './style.module.css'
const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
    return (
        <> <div className={styles.todoContainer}>
            <li className={styles.todoItem}  key={index}>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >{todo.text}</span>
           <button className={styles.todoButton} onClick={() => toggleTodo(index)}>
                    {todo.completed ? 'Undo' : 'Done'}
                </button>
                <button  className={styles.todoButton} onClick={() => deleteTodo(index)}>Delete</button>
            </li>
        </div>
        </>
       
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