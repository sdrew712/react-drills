import React, { useState, useEffect } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .catch(console.error);

    const random = Math.floor(Math.random() * response.results.length);

    const newPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${random}`
    )
      .then((res) => res.json())
      .catch(console.error);

    setPokemon(newPokemon);
  };

  return <h1>{pokemon.name}</h1>;
};

export default App;
