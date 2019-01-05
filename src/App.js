import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  render() {
    return (
      <div className="image" >
      <div className='wrapepr'>

        <div className="App">

          <header className="App-header">
            <img src="/stormh.png" className="App-logo" alt="logo" />
            <p>Click Images For Discography</p>
          </header>

        </div>
        <CharacterList />
      </div>
      </div>
    );
  }
}

export default App;
