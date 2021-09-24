import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <h2>{text}</h2>
    </div>
  );
};

export default App;
