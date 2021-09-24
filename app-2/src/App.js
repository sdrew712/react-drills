import React, { useState } from "react";

const App = () => {
  const [foods] = useState([
    "thin mints",
    "watermelon",
    "sushi",
    "blueberries",
    "mint chocolate chip ice cream",
  ]);

  let foodsToDisplay = foods.map((foodName, foodKey) => {
    return <h2 key={foodKey}>{foodName}</h2>;
  });

  return <div>{foodsToDisplay}</div>;
};

export default App;
