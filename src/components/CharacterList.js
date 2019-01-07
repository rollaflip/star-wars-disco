import React, { Component } from 'react';
import { characters } from '../characters';
import { Grid } from '@material-ui/core';
import '../CharacterList.css';
import MovieList from './MovieList';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';
// import InfoIcon from '@material-ui/icons/Info';

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
    width: 600,
    height: 450,
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
      chosen: '',
    };
  }
  handleClick = e => {
    // e.preventDefault()
    console.log(e.currentTarget.getAttribute('value'));
    this.setState({ chosen: e.currentTarget.getAttribute('value') }, () => {
      console.log(this.state.chosen);
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="wrap">
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              {/* <ListSubheader component="div">December</ListSubheader> */}
            </GridListTile>
            {characters.map((char,index) => (
              <GridListTile
                key={`title ${index}`}
                className="card"
                onClick={this.handleClick}
                value={char.url}
              >
                <img
                key={`img ${index}`}
                  className="avatar"
                  src={`./${char.name.split(' ')[0]}.jpeg`}
                  alt={char.url}
                />

                <GridListTileBar
                key={`title bar ${index}`}
                  style={{ height: 'auto' }}
                  title={char.name}
                  // subtitle={<span>{char.name}</span>}
                  actionIcon={
                    <IconButton className={classes.icon}>
                      {/* <InfoIcon /> */}
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
          <MovieList chosen={this.state.chosen} />
        </div>
      </div>
    );
  }
}
CharacterList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterList);
