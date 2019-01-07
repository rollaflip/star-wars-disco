import React, { Component } from 'react';
import { characters } from '../characters';
import '../CharacterList.css';
import MovieList from './MovieList';

import PropTypes from 'prop-types';
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
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    // backgroundColor: 'grey'
  },
  gridList: {
    width: 900,
    height: 225,
    // background: 'grey',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenURL: '',
      chosenName: '',
    };
  }
  handleClick = e => {
    // e.preventDefault()
    // console.log(e.currentTarget.getAttribute('value'));
    this.setState(
      {
        chosenURL: e.currentTarget.getAttribute('value'),
        chosenName: e.currentTarget.getAttribute('name'),
      },
      () => {
        console.log(this.state.chosenURL, this.state.chosenName);
      }
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="wrap">
        <div className={classes.root}>
          <GridList cellHeight={180} cols={4} className={classes.gridList}>
            <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
              {/* <ListSubheader component="div">December</ListSubheader> */}
            </GridListTile>
            {characters.map((char, index) => (
              <GridListTile
                key={`title ${index}`}
                onClick={this.handleClick}
                value={char.url}
                name={char.name}
              >
                <img
                  key={`img ${index}`}
                  src={`./${char.name.split(' ')[0]}.jpeg`}
                  alt={char.url}
                />

                <GridListTileBar
                  key={`title bar ${index}`}
                  style={{ height: 'auto' }}
                  title={char.name}
                  // subtitle={<span>{char.name}</span>}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div>
          <MovieList
            chosenURL={this.state.chosenURL}
            chosenName={this.state.chosenName}
          />
        </div>
      </div>
    );
  }
}
CharacterList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterList);
