// Fichero src/services/api.js
const callToApi = (house) => {
  // return fetch(`https://swapi.dev/api/people/?search=${searchName}`)
  return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          id: character.id,
          img: character.image,
          house: character.house,
        };
      });
      return cleanData;
    });
};

export default callToApi;
