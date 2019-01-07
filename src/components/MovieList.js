import React, { Component } from 'react';
import getMovies from './starWarsApiFetch';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'show',
    // backgroundColor: theme.palette.background.paper,
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
    };
    console.log(props, 'props from movielist');
  }

  async componentWillReceiveProps(newProps) {
    if (this.props.chosen !== newProps.chosen) {
      const discog = await getMovies(newProps.chosen);
      this.setState(
        { charDiscog: discog, chosenName: newProps.chosenName },
        console.log(this.state.charDiscog, this.state.chosenName)
      );
      // console.log(this.state.chosenName)
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
    const chosenName = this.state.chosenName;

    return (
      <div className={classes.root}>
        <GridList
          cellHeight={90}
          cols={4}
          className={classes.gridList}
          style={{ marginBottom: 10 }}
        >
          <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
            <ListSubheader component="div">{`Movie appearences By: ${chosenName}`}</ListSubheader>
          </GridListTile>
          {films.map((film, index) => (
            <GridListTile className="card">
              <img
                key={`img ${index}`}
                className="avatar"
                src={`./swlogo.jpg`}
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
        {/* <MovieList chosen={this.state.chosen} /> */}
      </div>
    );
  }
}

export default withStyles(styles)(MovieList);
