// Fichero src/services/api.js
const callToApi = (house) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        const translatedSpecies = character.species
          .replaceAll("human", "humano")
          .replaceAll("werewolf", "hombre lobo");
        const translatedGender = character.gender
          .replaceAll("female", "femenino")
          .replaceAll("male", "masculino");

        return {
          name: character.name,
          id: character.id,
          img: character.image,
          house: character.house,
          gender: translatedGender,
          species: translatedSpecies,
          alive: character.alive,
          alternatename: character.alternate_names,
        };
      });
      return cleanData;
    });
};

export default callToApi;
