import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  
  const renderPokemons = pokemons.map(pokemonObj => (
    <PokemonCard key={pokemonObj.id} pokemon={pokemonObj} />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      { renderPokemons }
    </Card.Group>
  );
}

export default PokemonCollection;
