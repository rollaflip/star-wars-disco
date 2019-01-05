let axios = require('axios');

const getCharacterByName = characterNum => {
  const starWarsURL = 'https://swapi.co/api/people';
  // let encodedCharacter = encodeURIComponent(characterNum);
  let characterURL = `${starWarsURL}/${characterNum}`
  if(!characterNum) characterURL = starWarsURL

  return axios.get(characterURL).then(res => {
    if (res.data) {
      let movieData = res.data.results;
      return movieData;
    } else {
      throw new Error(res.data.message);
    }
  });
};
export default getCharacterByName;

