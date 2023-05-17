import  { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from"./MainToDo.module.css";

import ConrtolToDo from "../ConrtolToDo/ConrtolToDo";
import TaskListItem from "../TaskListItem/TaskListItem";
import InputForm from "../InputForm/InputForm";


const MainToDo = () => {

  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || []);
  const [todoDone, setTodoDone] = useState(0);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    countTaskDone();
  }, [todo]);

  const countTaskDone = () => {
    const newTodoDone = (todo.filter(item => item.status))
    setTodoDone(newTodoDone.length)
  }

  const deleteTodoDone = () => {
    setTodo(todo.filter(item => !item.status));
  }
  const deleteTodo = (id) => {
    setTodo([...todo.filter(item => item.id != id)]);
  }
  const deleteTodoAll = () => {
    setTodo([]);
  }
  const editTodo = (id, title) => {
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        item.title = title
      }
      return item
    })
    setTodo(newTodo);
  };

  const statusTodo = (id) => {
    let newTodo = todo.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    })
    setTodo(newTodo);
  };

  return (
    <div className={styles.mainToDo}>
      <ConrtolToDo
        todo={todo.length}
        deleteTodoDone={deleteTodoDone}
        todoStatus={todo.status}
        setTodo={setTodo}
        todoDone={todoDone}
        deleteTodoAll={deleteTodoAll}           
      />
      <div className={styles.containerStrings}>
        {todo.map(item => (
          <TaskListItem
            todo={item}
            setTodo={setTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            key={uuidv4()}
            statusTodo={statusTodo}
          />
        ))}
      </div>
      <div className={styles.containerBottom}>
        <InputForm
          todo={todo}
          setTodo={setTodo} 
        />
      </div>
    </div>
  );
}

export default MainToDo;
