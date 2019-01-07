import axios from 'axios';

const getFilms = async characterURL => {
  try {
    const filmLinksList = await axios.get(characterURL);
    const { films } = filmLinksList.data;
    const filmDataList = await axios.all(
      films.map(film => axios.get(film))
    );
    console.log(filmDataList)
    return filmDataList;
  } catch (error) {
    console.log(error.toString(), '^^^^^^^^^^^^');
    return error.toString();
  }
};

export default getFilms;
