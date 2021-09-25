import React, { useState } from "react";

const NewTask = ({ setTask, tasks }) => {
  const [userInput, setUserInput] = useState("");

  const handleAdd = () => {
    setTask(tasks.concat(userInput));
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={({ target }) => setUserInput(target.value)}
        placeholder="Enter new task"
      />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
};

export default NewTask;
