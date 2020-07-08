import React from 'react'
import '../App.css'
import Cell from './Cell'

export default function Row (props){

        return (
            <div className="row"> 
                 <Cell cellId="0" rowId={props.rowId} updateScore={props.updateScore} cellMark={props.board[0]} /> 
                 <Cell cellId="1" rowId={props.rowId} updateScore={props.updateScore} cellMark={props.board[1]} /> 
                 <Cell cellId="2" rowId={props.rowId} updateScore={props.updateScore} cellMark={props.board[2]} /> 
            </div>
        )
}
    
