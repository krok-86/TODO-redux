import styles from "./App.module.css";
import MainToDo from './components/MainToDo/MainToDo'


function App() {
  
  return (
    <div className={styles.app}>
      <div className={styles.title}>React ToDo List</div>
     <MainToDo />
    </div>
  );
}

export default App;
