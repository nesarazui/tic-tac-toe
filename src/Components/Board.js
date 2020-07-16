import React, { Component } from 'react'
import '../App.css'
import Row from './Row'
import { checkWinnings } from './utils'

class Board extends Component {
    constructor(){
        super()
            this.state = {
                board: [[null, null, null], [null, null, null], [null, null, null]],
                userTurn: 'X',
                cellAddress: [],
                winner: []
            }
            this.updateScore = this.updateScore.bind(this) 
            this.undoMove = this.undoMove.bind(this)   
            this.clearBoard = this.clearBoard.bind(this)
    }

    updateScore (cellId, rowId) {
        if (this.state.board[rowId][cellId]) {
            return 
        }
        console.log(cellId, rowId)
        let boardClone = [...this.state.board]

        //'locks' cell from further changes if user tries to click on a marked cell
            boardClone[rowId][cellId] = this.state.userTurn
            let cellAddressClone = [...this.state.cellAddress]
            cellAddressClone.push({rowId, cellId})
            this.setState({board: boardClone, cellAddress: cellAddressClone})
        
            let status = checkWinnings(this.state.board) 
            if (status) {
                let winnerClone = [...this.state.winner, status]
                this.setState({winner: winnerClone}, () => {console.log('who won', this.state.winner)})
                this.clearBoard()
            }

        this.state.userTurn === 'X' ? 
            this.setState({userTurn: 'O'}) :
            this.setState({userTurn: 'X'}) 
    }

    undoMove () {
        if (this.state.cellAddress.length > 0) {
            const {rowId, cellId} = this.state.cellAddress.pop()
            let boardCloned = [...this.state.board]
            boardCloned[rowId][cellId] = null
            this.setState({board: boardCloned})
            this.state.userTurn === 'X' ? 
            this.setState({userTurn: 'O'}) :
            this.setState({userTurn: 'X'})
        }
        else {
            alert('resetting game!')
            this.clearBoard()
        }
    }

    clearBoard () {
        this.setState({
            board: [[null, null, null], [null, null, null], [null, null, null]],
            userTurn: 'X',
            cellAddress: []
        })
    }


    render () {
        return (
            <div className="contentPos">
                <div className="pageHeader">
                 A simple game of Tic Tac Toe.
                </div>
                <Row rowId="0" updateScore={this.updateScore} userTurn={this.state.userTurn} board={this.state.board[0]} />
                <Row rowId="1" updateScore={this.updateScore} userTurn={this.state.userTurn} board={this.state.board[1]} />
                <Row rowId="2" updateScore={this.updateScore} userTurn={this.state.userTurn} board={this.state.board[2]} />
                <button onClick={this.undoMove} className="buttonStyle">Undo Move</button>
                <button onClick={this.clearBoard} className="buttonStyle">Reset Game</button>
            </div>
        )
    }
}



export default Board

