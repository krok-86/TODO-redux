import { useState } from 'react';

import styles from './TaskListItem.module.css';

const TaskListItem = ({ todo, deleteTodo, editTodo, statusTodo }) => {

  const [isEdit, setIsEdit] = useState(false);
  const [inputEdit, setInputEdit] = useState(todo.title)
  const [taskColor, setTaskColor] = useState(todo.status)

  const handleEnter = (e) => {
    if (e.key !== 'Enter') {
      return
    }
    editTodo(todo.id, e.target.value);
  };

  const handleChange = (e) => {
    setInputEdit(e.target.value);
  };

  const handleStatus = () => {
    statusTodo(todo.id);
    setTaskColor(!taskColor);
  };

  return (
    <div className={styles.taskListItem}>
      <div
        className="material-icons circle"
        style={taskColor ? { color: "#42b883" } : { color: "#9c9692" }}
        onClick={handleStatus}
      >
        check_circle
      </div>
      <>
        {isEdit ? (<div>
          <input
            className={styles.inputString}
            type="text"
            placeholder='edit task'
            value={inputEdit}
            onKeyUp={(e) => handleEnter(e)}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
         ) : (
          <div className="taskListItem-title" onClick={() => setIsEdit(true)}> {todo.title} </div>
         )}
      </>
      <div className="delete">
        <div
          className='material-icons del'
          style={{ color: "#F65050" }}
          onClick={() => deleteTodo(todo.id)}
        >
          delete
        </div>
      </div>
    </div>
  );
}

export default TaskListItem;

