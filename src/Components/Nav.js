import React from 'react'
import { Link }  from 'react-router-dom'

export default function Nav () {
    return (
        <div className="navLinks">
            <Link className="navLinks" to="/">Home</Link>
            <Link className="navLinks" to="/scores">Scores</Link>
            <Link className="navLinks" to="/tic-tac-toe">Tic-Tac-Toe</Link>
        </div>
    )
}