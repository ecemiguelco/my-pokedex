import React, { useContext, useEffect, useState } from "react";
import PokemonLoader from "../components/PokemonLoader";
import { PokeListContext } from "../providers/PokeListProvider";
import { OffestvalueContext } from "../providers/OffsetValueProvider";
import { StatusContext } from "../providers/StatusProvider";

const offset = 20;
function Main() {
  const [pokeList, setPokeList] = useContext(PokeListContext);
  const [offsetValue, setOffsetValue] = useContext(OffestvalueContext);
  const [status, setStatus] = useContext(StatusContext);
  const [loading, setLoading] = useState(false);

  const fetchJsonURL = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const offsetter = () => {
    const offsetedValue = offsetValue + offset;
    console.log(offsetedValue);
    setOffsetValue(offsetedValue);
  };

  const pokeFetcher = async () => {
    console.log(offsetValue);
    try {
      const pokeDataJson = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offsetValue}`);
      const pokeData = await pokeDataJson.json();
      const pokeNamesUrl = [...pokeData.results];
      const pokeUrls = pokeNamesUrl.map(({ url }) => {
        return url;
      });
      const data = await Promise.all(
        pokeUrls.map((url) => {
          return fetchJsonURL(url);
        })
      );
      console.log(data);
      setPokeList([...pokeList, ...data]);
    } catch (error) {
      console.log(`${error}`);
    }
    offsetter();
    setStatus(false);
    console.log("status", status);
    // console.log("loading", loading);
  };

  useEffect(() => {
    if (status) {
      console.log("status", status);
      pokeFetcher();
    }
    console.log("status", status);
  }, []);

  // useEffect(() => {
  //   if (!loading) {
  //     setLoading(true);
  //   }
  //   console.log("loading", loading);
  // }, [pokeList]);

  return (
    <>
      <ul id="pokedex">{pokeList.length !== 0 ? <PokemonLoader pokeList={pokeList} /> : null}</ul>
      <button
        className="btn"
        onClick={() => pokeFetcher()}
      >
        {loading ? "Gathering Data" : "Load Pokemon"}
      </button>
      {/* <button
        className="btn"
        onClick={() => loadLess()}
      >
        Load Less
      </button> */}
    </>
  );
}

export default Main;
