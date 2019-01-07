import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="background-image">
        <div className="App">
          <header className="App-header">
            {/* <img src="/stormh.png" className="App-logo" alt="logo" /> */}
            <h2>Click Character For Discography</h2>
          </header>
        <CharacterList />
        <Footer />
        </div>
        <div />
      </div>
    );
  }
}

export default App;
