import React, { Component } from 'react';
import getCharacterByName from './starWarsApiFetch'

export default class AlbumList extends Component {




  render() {
    return (
      <div>
        <getCharacterByName />

      </div>
    )
  }
}
