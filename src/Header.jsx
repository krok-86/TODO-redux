import './Header.css';

function Header({ todo, deleteTodoDone, todoDone, deleteTodoAll }) {
  
  return (
    <header className="Header">
        <div className="BadgeTaskCounter">
          Tasks
          <div className="CountNumber">{todo}</div>
        </div>
        <div className="BadgeTaskCounter">
          TasksDone
          <div className="CountNumber">
            {todoDone}
          </div>
        </div>
        <button
          className="TasksDeleteAndDone"
          onClick={deleteTodoDone}>
          Tasks Done
          <div className="material-icons" style={{ color: "white" }}>delete</div>
        </button>
        <button
          onClick={deleteTodoAll}
          className="TasksDeleteAndDone">
          Tasks
          <div className="material-icons" style={{ color: "white" }}>delete</div>
        </button>
    </header>
  );
}

export default Header;
