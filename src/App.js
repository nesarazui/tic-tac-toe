import React, { useState } from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import './App.css';
import Board from './Components/Board'
import Scores from './Components/Scores'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Jokes from './Jokes'

function App() {
  // const [value, setValue] = useState(0)

  // const increase = () => {
  //   setValue(value + 1)
  // }

  // const decrease = () => {
  //   setValue(value - 1)
  // }

  return (
    <Router>
    <div className="App">
  
{/* 
    <button onClick={() => increase()}>Increase</button>
    <button onClick={() => decrease()}>Decrease</button>
    <div>{value}</div> */}

      <header className="App-header">
        <Nav />
      </header>

      <main>
        <Route exact path="/" component={Home }/>
        <Route exact path="/tic-tac-toe" component={Board }/>
        <Route exact path="/scores" component={Scores }/>
        <Route exact path="/jokes-by-cats" component={Jokes }/>
      </main>
    </div>
    </Router>
  );
}

export default App;
