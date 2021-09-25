import React, { useState } from "react";
import NewTask from "./components/NewTask";
import List from "./components/List";

const App = () => {
  const [tasks, setTasks] = useState(["dishes", "cat litter"]);

  return (
    <div>
      <h1>My to do list</h1>
      <NewTask setTask={setTasks} tasks={tasks} />
      <List tasks={tasks} />
    </div>
  );
};

export default App;
