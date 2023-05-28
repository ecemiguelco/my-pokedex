import { createContext, useState } from "react";

const PokeListContext = createContext();

const PokeListProvider = (props) => {
  const [pokeList, setPokeList] = useState([]);

  return <PokeListContext.Provider value={[pokeList, setPokeList]}>{props.children}</PokeListContext.Provider>;
};

export { PokeListContext, PokeListProvider };
