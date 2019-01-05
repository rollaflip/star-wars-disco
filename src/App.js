import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'

class App extends Component {
  render() {
    return (
      <div>


      <div className="App">
        <header className="App-header">
          <img src="/stormh.png"className="App-logo" alt="logo" />
          <p>
            Welcome to Ian's Star Wars Disco
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star Wars Disco!!
          </a>
        </header>
      </div>
      <CharacterList />
      </div>
    );
  }
}

export default App;

