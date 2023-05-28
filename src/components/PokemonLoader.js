import React from "react";
import { Navigate, NavLink } from "react-router-dom";

function PokemonLoader({ pokeList }) {
  return (
    <>
      {pokeList.map((pokemon, index) => {
        const link = "/" + pokemon.name;
        return (
          <NavLink
            key={index}
            className="card"
            to={link}
          >
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
          </NavLink>
        );
      })}
    </>
  );
}

export default PokemonLoader;
