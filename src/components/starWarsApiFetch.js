let axios = require('axios');
const starWarsURL = 'https://swapi.co/api/people';

const getCharacterByName = characterNum => {
  // let encodedCharacter = encodeURIComponent(characterNum);
  let characterURL = `${starWarsURL}/${characterNum}`
  if(!characterNum) characterURL = starWarsURL

  return axios.get(characterURL).then(res => {
    if (res.data) {
      let characters = res.data.results;
      return characters;
    } else {
      throw new Error(res.data.message);
    }
  });
};
export default getCharacterByName;

