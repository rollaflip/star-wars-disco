import axios from 'axios';

const getFilms = async characterURL => {
  try {
    const filmLinks = await axios.get(characterURL);
    const { films } = filmLinks.data;
    const filmDataList = await axios.all(films.map(film => axios.get(film)));
    console.log(filmDataList);
    return filmDataList;
  } catch (error) {
    console.log(error.toString(), '^^^^^^^^^^^^');
    return error;
  }
};

export default getFilms;
