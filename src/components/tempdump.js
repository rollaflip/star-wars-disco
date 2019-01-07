import axios from 'axios';

const getMovies = async characterURL => {
  try {
    const movieURLList = await getMovieURLs(characterURL);
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
    console.log(error.toString(), '^^^^^^^^^^^^')
    return error.toString();
  }
};

const getMovieURLs = async (characterURL) => {
  try {
    const charData = await axios.get(characterURL);
    return charData.data.films;
  } catch (error) {
    console.log(error.toString(), '^^^^^^^^^^^^')
    return error.toString();
  }
};
const getMovieData = async filmURL => {
  try {
    const movieData = await axios.get(filmURL);
    return movieData;
  } catch (error) {
    console.log(error.toString(), '^^^^^^^^^^^^')
    return error.toString();
  }
};

export default getMovies;
