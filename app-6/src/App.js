import React, { useState } from "react";
import Todo from "./Todo";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTask] = useState([]);

  const handleAdd = () => {
    setTask(tasks.concat(userInput));
  };

  return (
    <div>
      <h1>My to do list</h1>
      <input
        type="text"
        value={userInput}
        onChange={({ target }) => setUserInput(target.value)}
        placeholder="Enter new task"
      />
      <button onClick={() => handleAdd()}>Add</button>

      <Todo tasks={tasks} />
    </div>
  );
};

export default App;
