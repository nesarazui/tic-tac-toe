import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Components/Board'
import Cell from './Components/Cell'
import Row from './Components/Row'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Board />
        </div>
        <p>
          A simple game of Tic Tac Toe.
        </p>
      </header>
    </div>
  );
}

export default App;
