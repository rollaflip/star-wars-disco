import React, { Component } from 'react';
import getFilms from './starWarsApiFetch';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'show',
  },
  gridList: {
    width: 900,
    height: 'auto',
  },
});

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charDiscog: [],
      chosenName: '',
      headerDisplay: false,
      movieDisplay: true,
      message: '',
      showLoading:false,
    };
  }

  async componentWillReceiveProps(newProps) {
    if (this.props.chosenURL !== newProps.chosenURL) {
      this.setState({showLoading: true})
            const discog = await getFilms(newProps.chosenURL);
      if (discog.constructor === Array) {
        this.setState({
          charDiscog: discog,
          chosenName: newProps.chosenName,
          headerDisplay: true,
          movieDisplay: true,
          message: `Movie appearences By: ${newProps.chosenName}`,
          showLoading: false
        });
      } else {
        this.setState({
          showLoading:false,
          movieDisplay: false,
          message: `${discog}: ${
            this.props.chosenName
          } CANNOT BE FOUND IN THIS GALAXY`,
        });
      }
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
    const { classes } = this.props;
    const films = this.state.charDiscog;
    const message = this.state.message;

  if(this.state.showLoading){
    return <img src='./SWspinner.gif' alt='loader' className='loader'/>
  }else{
    if (this.state.movieDisplay) {
      return (
        <div>
          <div>
            <p className="message">{message}</p>
          </div>
          <div className={classes.root}>
            <GridList
              cellHeight={90}
              cols={4}
              className={classes.gridList}
              style={{ marginBottom: 0, marginTop: 12 }}
            >
              <GridListTile cols={4} style={{ height: 'auto' }} />
              {films.map((film, index) => (
                <GridListTile key={`card ${index}`}>
                  <img
                    key={`img ${index}`}
                    src={`./${film.data.title}.jpg`}
                    alt={film.data.episode_id}
                  />

                  <GridListTileBar
                    key={`title bar ${index}`}
                    style={{ height: 'auto' }}
                    title={film.data.title}
                    subtitle={
                      <span>{this.dateFormater(film.data.release_date)}</span>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      );
    } else{

      return (
        <div>
          <p className="message">{message}</p>
        </div>
      );
    }

}
  }
}
export default withStyles(styles)(MovieList);
