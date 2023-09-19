// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails

  const handleClick = () => {
    onDelete(id)
  }

  return (
    <li className="todo-list-item">
      <p>{title}</p>
      <button className="button" type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
