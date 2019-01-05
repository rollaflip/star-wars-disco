import React, { Component } from 'react';
import getCharacterByName from './starWarsApiFetch'

export default class CharacterList extends Component {




  render() {
    const characters = getCharacterByName()
    return (
      <div>
        {characters}
      </div>
    )
  }
}
