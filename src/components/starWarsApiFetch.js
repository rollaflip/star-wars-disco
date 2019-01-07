import axios from 'axios';

const getMovies = async characterURL => {
  const getMovieURLs = async () => {
    try {
      const charData = await axios.get(characterURL);
      return charData.data.films;
    } catch (error) {
      return error;
    }
  };
  const getMovieData = async filmURL => {
    try {
      const movieData = await axios.get(filmURL);
      return movieData;
    } catch (error) {
      return error;
    }
  };
  console.log(characterURL);


  try {
    const movieURLList = await getMovieURLs();
      const movieDataList = await Promise.all(
        movieURLList.map(movieURL => {
          return getMovieData(movieURL);
        })
      );
      if (movieDataList) {
        console.log(movieDataList);
        return movieDataList;
      }
  } catch (error) {
    return error;
  }
  // else console.log('ERRRROR DOGGG');
};
export default getMovies;
