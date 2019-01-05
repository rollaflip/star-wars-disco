import React, { Component } from 'react';
import getCharacterByName from './starWarsApiFetch'
// import {characters} from '../characters.json'
const characters = require('../characters')
// import

export default class CharacterList extends Component {


  render() {
    const charactersAll = getCharacterByName()
    // console.log(characters)
    return (
      <div>

         {characters['characters'].map(char => {
           return <li>{char.name}</li>
         })}
         {/* {console.log(characters['characters'])} */}
      </div>
    )
  }
}
