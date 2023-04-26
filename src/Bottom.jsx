import "./Bottom.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Bottom({ todo, setTodo }) {

  const [value, setValue] = useState("");

  const saveTodo = () => {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: false,
      },
    ]);
    setValue("");
  };

  const handleClick = () => {
    if (value) {
      saveTodo();
    }
  };

  const handleEnter = (e) => {
    if (e.key == "Enter" && value) {
      saveTodo();
    }
  };

  return (
    <div className="Bottom">
      <div className="InputTasks">
        <input
          className="InputBoard"
          type="text"
          placeholder="New task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => handleEnter(e)}
        />

        <div
          className="material-icons add"
          style={{ color:"#3e82c3" }}
          onClick={handleClick}
        >
          add_circle
        </div>
      </div>
    </div>
  );
}

export default Bottom;
