import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Simple Addition Game <br/> written in <strong>React JS</strong></h2>
        </div>
        <Quiz/>
      </div>
    );
  }
}

export default App;
