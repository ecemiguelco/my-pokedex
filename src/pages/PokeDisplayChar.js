import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PokeListContext } from "../providers/PokeListProvider";

function PokeDisplayChar() {
  const { pokename } = useParams();
  const [pokeList, setPokeList] = useContext(PokeListContext);
  // console.log(pokeList);
  const pokemon = pokeList.find((poke) => poke.name === pokename);
  console.log(pokemon);
  return (
    <div>
      <li className="card">
        <h2 className="pokeId">#{pokemon.id}</h2>
        <img
          className="cardImage"
          src={pokemon.sprites.front_default}
          alt="Pokemon Image"
        ></img>
        <p className="cardTitle">{pokemon.name}</p>
        <p className="cardTypes">
          {pokemon.types.map((type) => {
            return type.type.name + " ";
          })}
        </p>
        <div className="abilitiesContainer">
          <p className="abilityTitle">Abilities</p>

          {pokemon.abilities.map((ability) => {
            return <p>{ability.ability.name} </p>;
          })}
        </div>
        <div className="statsContainer">
          <p className="statsTitle">Base Stats</p>

          {pokemon.stats.map((stat) => {
            return (
              <p>
                {stat.stat.name} : {stat.base_stat}{" "}
              </p>
            );
          })}
        </div>
      </li>
    </div>
  );
}

export default PokeDisplayChar;
