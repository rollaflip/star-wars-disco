import axios from 'axios';

const getMovies = async characterURL => {
  console.log(characterURL);

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

  try {
    const movieURLList = await getMovieURLs();
    if (movieURLList) {
      const movieDataList = await Promise.all(
        movieURLList.map(movieURL => {
          return getMovieData(movieURL);
        })
      );
      if (movieDataList) {
        console.log(movieDataList);
        return movieDataList;
      }
    }
  } catch (error) {
    return error;
  }
  // else console.log('ERRRROR DOGGG');
};
export default getMovies;
