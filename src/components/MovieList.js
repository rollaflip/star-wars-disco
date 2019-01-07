import React, { Component } from 'react';
import getMovies from './starWarsApiFetch';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charDiscog: [],
    };
    console.log(props, 'props from movielist');
  }

  async componentWillReceiveProps(newProps) {
    if (this.props.chosen !== newProps.chosen) {
      const discog = await getMovies(newProps.chosen);
      this.setState({ charDiscog: discog }, console.log(this.state.charDiscog));
    }
  }

  dateFormater = date => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('eng', options);
  };

  render() {
    const films = this.state.charDiscog;

    return (
      <div>
        {films.map((film, index) => {
          return (
            <div key={index}>
              <li key={`title ${index}`}>{film.data.title}</li>
              <li key={`release date ${index}`}>
                {this.dateFormater(film.data.release_date)}
              </li>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(MovieList);
