import React from "react";
import { useContext } from "react";
import { PokeListContext } from "../providers/PokeListProvider";
import PokemonLoader from "../components/PokemonLoader";
import { useParams } from "react-router-dom";

function PokeByType() {
  const [pokeList, setPokeList] = useContext(PokeListContext);
  const { type } = useParams();
  const filteredByTypePokeList = pokeList.filter((pokemon) => pokemon.types.find((types) => types.type.name === type));
  console.log(type);
  console.log(filteredByTypePokeList);

  return (
    <ul id="pokedex">
      {filteredByTypePokeList.length !== 0 ? (
        <PokemonLoader pokeList={filteredByTypePokeList} />
      ) : (
        <h2>No Pokemon with Selected type</h2>
      )}
    </ul>
  );
}

export default PokeByType;
