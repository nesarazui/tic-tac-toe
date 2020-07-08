import React, { Component } from 'react'
import '../App.css'
import Row from './Row'

class Board extends Component {
    constructor(){
        super()
            this.state = {
                board: [[null, null, null], [null, null, null], [null, null, null]],
                userTurn: 'X'
            }
            this.updateScore = this.updateScore.bind(this)    
    }

    updateScore (cellId, rowId) {
        console.log(cellId, rowId)
        let boardClone = [...this.state.board]
        boardClone[rowId][cellId] = this.state.userTurn
        this.setState({board: boardClone})

        this.state.userTurn === 'X' ? 
            this.setState({userTurn: 'O'}) :
            this.setState({userTurn: 'X'}) 
    }


    render () {
        return (
            <div>
                <Row rowId="0" updateScore={this.updateScore} userTurn={this.state.userTurn} board={this.state.board[0]} />
                <Row rowId="1" updateScore={this.updateScore} userTurn={this.state.userTurn} board={this.state.board[1]} />
                <Row rowId="2" updateScore={this.updateScore} userTurn={this.state.userTurn} board={this.state.board[2]} />
            </div>
        )
    }
}



export default Board

