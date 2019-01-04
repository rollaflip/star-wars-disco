let axios = require('axios');

const charactersFromApi = 'https://swapi.co/api/people';

const getCharacterByName = character => {
  // let encodedCharacter = encodeURIComponent(character);

  return axios.get(charactersFromApi).then(res => {
    if (res.data) {
      let characters = res.data.results;
      return characters;
    } else {
      throw new Error(res.data.message);
    }
  });
};
export default getCharacterByName;
