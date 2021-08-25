import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons,setPokemons] = useState([])
  const [backupList, setBackList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => {
      setPokemons(data)
      setBackList(data)
    })
  },[])

  const addNewPokemon = (pokemonObj) => {
    setPokemons([ ...pokemons, pokemonObj ])
  }

  const searchPokemon = (searchText) => {
    // console.log(searchText)
    const filteredPokemons = backupList.filter(pokemon => {
      return pokemon.name.includes(searchText)
    })
    setPokemons(filteredPokemons)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon} />
      <br />
      <Search searchPokemon={searchPokemon} />
      <br />
      <PokemonCollection pokemons={pokemons} />
    </Container>
  );
}

export default PokemonPage;
