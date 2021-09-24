import React from "react";

const Todo = ({ tasks }) => {
  return tasks.map((task) => <h2>{task}</h2>);
};

export default Todo;
