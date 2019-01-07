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
  // componentDidMount(){
  //   // getMovies(this.state.charDiscog)

  // }
  async componentWillReceiveProps(newProps) {
    // console.log(newProps.chosen, 'xxxxx')
    if (this.props.chosen !== newProps.chosen) {
      const discog = await getMovies(newProps.chosen)
      // console.log(newProps)
      this.setState({charDiscog :  discog},console.log(this.state.charDiscog))
    }
  }

    render(){
      const chosen  = this.props.chosen;
      // console.log(this.props.chosen)
      // getMovies(chosen)
      // console.log(bob)
      return (
        <div>
        {/* <li>{this.state.charDiscog[0]}</li> */}
        <p>hi</p>
      </div>
    );
  }
}


export default withStyles(styles)(MovieList);
