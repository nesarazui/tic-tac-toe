import React from 'react'
import { Link }  from 'react-router-dom'


export default function HomepageCards () {
    return (
    <div className="cardContainer">

      <div className="card text-white bg-info mb-3" >
      <Link to="/tic-tac-toe">
            <div className="card-header">Tic Tac Toe</div>
      </Link>
      </div>  


      <div className="card text-white bg-warning mb-3">
      <Link to="/jokes-by-cats">
            <div className="card-header">Cats Telling Jokes</div>
      </Link>
      </div>  


      <div className="card text-white bg-success mb-3">
      <Link to="/">
            <div className="card-header">More Games Coming Soon</div>
      </Link>
      </div>  

    </div>


    )
}
