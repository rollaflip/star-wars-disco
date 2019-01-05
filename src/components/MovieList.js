import React, { Component } from 'react';
import getCharacterByName from './starWarsApiFetch';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({})


const MovieList =(props)=>{
  console.log(props, 'from movielist')
  return(
    <div>

      {/* <img src="./R2-D2.jpeg" alt=""/> */}
      <p>hi</p>
    </div>
  )

}

export default withStyles(styles)(MovieList);
