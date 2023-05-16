
import styles from './TasksDeleteAndDone.module.css';


function TasksDeleteDone({ deleteTodoDone }) {
  return (
    <button
      className={styles.tasksDeleteAndDone}
      onClick={deleteTodoDone}
    >
      <div>Tasks Done</div>
      <div className="material-icons" style={{ color: "white" }}>delete</div>
    </button>
  );
}

export default TasksDeleteDone;
