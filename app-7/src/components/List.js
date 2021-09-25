import React from "react";
import Todo from "./Todo";

const List = ({ tasks }) => {
  let list = tasks.map((task, index) => <Todo key={index} task={task} />);

  return <div>{list}</div>;
};

export default List;
