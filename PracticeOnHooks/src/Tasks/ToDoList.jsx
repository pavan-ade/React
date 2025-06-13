import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    console.log(value);
    if (value.trim() == "" || value == undefined) return;
    setTasks([...tasks, value]);
    setValue("");
  };
  const handleInput = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Task"
            onChange={handleInput}
            value={value}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {tasks.map((task) => (
          <li key={Math.random()}>{task}</li>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
