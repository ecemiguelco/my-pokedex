const initialPokeLoader = async (offsetValue) => {
  // const fetchJsonURL = async (url) => {
  //   const response = await fetch(url);
  //   return response.json();
  // };

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
        return fetch(url);
      })
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(`${error}`);
  }
};

export default initialPokeLoader;
