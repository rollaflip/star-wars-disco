import axios from 'axios';
// let axios = require('axios');
// import { characters } from '../characters';

const getMovies = characterURL => {
  console.log(characterURL);

  // const starWarsURL = 'https://swapi.co/api/people';
  // let encodedCharacter = encodeURIComponent(characterNum);
  // let characterURL = `${starWarsURL}/${characterNum}`
  // if(!characterNum) characterURL = starWarsURL

  // const moviesLinks = await axios.get(characterURL).then(response => response.data.films)
  // const dataObjs = await Promise.all(moviesLinks.map(link => axios.get(link)))
  // console.log(dataObjs)
  // const movies = dataObjs.map(data => data.data)

  const getMovieURLs = async () => {
    try {
      const charData = await axios.get(characterURL);
      return charData.data.films;
    } catch (error) {
      return error
    }
  };
  const getMovieData = async (filmURL) => {
    try {
      const movieData = await axios.get(filmURL)
      return movieData
    } catch (error) {
      return error;
    }
  };
  const getDiscogLinks = async () => {
    try{

      const movieURLList = await getMovieURLs();
      if (movieURLList) {
        const movieDataList = await Promise.all(movieURLList.map(movieURL => {
          return getMovieData(movieURL);
        }));
        if(movieDataList){

          console.log(movieDataList[3].data)
          return movieDataList
        }
      }
    } catch (error) {return error}
    // else console.log('ERRRROR DOGGG');
  };
  getDiscogLinks();
};
export default getMovies;
