import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Maps from './components/Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Christina and Aaron's Travel Agency</h1>
        </header>
        <p className="App-intro">
         Pick out your favourite destinations and we will show you some local events and attractions!
        </p>
        <Maps/>
      </div>
    );
  }
}

export default App;
