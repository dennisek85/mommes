import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DishesContainer from './components/DishesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mommes redux</h2>
        </div>
        <p className="App-intro">
          To get started, see project README. Frontend code is in <code>src/</code> dir.
          API code is in <code>api/</code> dir.
        </p>
        <DishesContainer />
      </div>
    );
  }
}

export default App;
