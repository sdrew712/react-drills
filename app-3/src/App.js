import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [foods] = useState([
    "thin mints",
    "watermelon",
    "sushi",
    "blueberries",
    "mint chocolate chip ice cream",
  ]);

  let filteredFoods = foods.filter((food) => food.includes(text));
  let foodsToDisplay = filteredFoods.map((foodName, foodKey) => {
    return <h2 key={foodKey}>{foodName}</h2>;
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <div>{foodsToDisplay}</div>
    </div>
  );
};

export default App;
