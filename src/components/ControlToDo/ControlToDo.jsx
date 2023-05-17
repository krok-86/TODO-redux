import styles from './ConrtolToDo.module.css';

function ConrtolToDo({ todo, deleteTodoDone, todoDone, deleteTodoAll }) {
  console.log(styles);
  return (
    <ConrtolToDo className={styles.ConrtolToDo}>
        <div className={styles.badgeTaskCounter}>
          Tasks
          <div className={styles.countNumber}>{todo}</div>
        </div>
        <div className={styles.badgeTaskCounter}>
          TasksDone
          <div className={styles.countNumber}>
            {todoDone}
          </div>
        </div>
        <button
          className={styles.tasksDeleteAndDone}
          onClick={deleteTodoDone}>
          Tasks Done
          <div className="material-icons" style={{ color: "white" }}>delete</div>
        </button>
        <button
          onClick={deleteTodoAll}
          className={styles.tasksDeleteAndDone}>
          Tasks
          <div className="material-icons" style={{ color: "white" }}>delete</div>
        </button>
    </ConrtolToDo>
  );
}

export default ConrtolToDo;
