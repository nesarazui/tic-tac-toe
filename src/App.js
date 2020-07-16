import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import './App.css';
import Board from './Components/Board'
import Scores from './Components/Scores'
import Home from './Components/Home'
import Nav from './Components/Nav'

function App() {
  return (
    <Router>
    <div className="App">

      <header className="App-header">
        <Nav />
      </header>

      <main>
        <Route exact path="/" component={Home }/>
        <Route exact path="/tic-tac-toe" component={Board }/>
        <Route exact path="/scores" component={Scores }/>
      </main>
    </div>
    </Router>
  );
}

export default App;
