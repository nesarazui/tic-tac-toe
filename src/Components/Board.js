import React, { Component } from 'react'
import '../App.css'
import Row from './Row'
import { checkWinnings, isBoardFull } from './utils'
import DashboardTicTacToe from './DashboardTicTacToe'
import  {Button} from 'react-bootstrap';

class Board extends Component {
   
    constructor(){
        super()
            this.state = {
                board: [[null, null, null], [null, null, null], [null, null, null]],
                userTurn: 'X',
                cellAddress: [],
                winner: [],
                gameRound: 0,
                previousWinner: '',
                winData: [],
                status: false
            }
            this.updateScore = this.updateScore.bind(this) 
            this.undoMove = this.undoMove.bind(this)   
            this.clearBoard = this.clearBoard.bind(this)
            this.resetGameAfterWin = this.resetGameAfterWin.bind(this)
            this.timer = null
            
    }

    updateScore (cellId, rowId) {
        //cell is considered 'locked' if it already has a value (not null) since a player should not update an already marked cell
        if (this.state.board[rowId][cellId]) {
            return 
        }

        //updates cell in question from null to current value of userTurn (x or o)
        //pushes current cell address into 'cellAddress' in case move needs to be undone later
            let boardClone = [...this.state.board]
            boardClone[rowId][cellId] = this.state.userTurn
            let cellAddressClone = [...this.state.cellAddress]
            cellAddressClone.push({rowId, cellId})
            this.setState({board: boardClone, cellAddress: cellAddressClone})
        

        //after cell has been marked by current userTurn, userTurn is updated to the opposite to reflect next turn
            this.state.userTurn === 'X' ? 
            this.setState({userTurn: 'O'}) :
            this.setState({userTurn: 'X'}) 
            console.log('board state right now: ', this.state.board)


        //after each turn has been 'played', checkWinnings function is called, which reviews current board state for any winnings.
        //if there is a winning, the winning user is pushed into winner array for score logging and board is reset for next game
            let status = checkWinnings(this.state.board) 
            let boardIsFull = isBoardFull(this.state.board) //if true, board is full
            console.log('is board full: ', boardIsFull)
            if (status) {
                let winnerClone = [...this.state.winner, status] //pushes latest winner into array

                let previousWinnerClone = winnerClone[winnerClone.length - 1] //grabs latest winner

                let gameRoundClone = this.state.gameRound //updates game round by 1
                gameRoundClone++

                let winDataClone = [...this.state.winData, {round: gameRoundClone, winner: previousWinnerClone}] //adds into array the round + winner

                this.setState(
                    {
                     winner: winnerClone,
                     gameRound: gameRoundClone,
                     previousWinner: previousWinnerClone,
                     winData: winDataClone,
                     status: true
                    }, 
                    () => {
                    this.timer = setTimeout(this.resetGameAfterWin, 5000)
                    console.log('state after win: ', this.state)
                    return true
                    
                })
            } else if (boardIsFull) {
                let winnerClone = [...this.state.winner, 'draw'] //pushes latest winner into array

                let previousWinnerClone = winnerClone[winnerClone.length - 1] //grabs latest winner i.e. 'draw'

                let gameRoundClone = this.state.gameRound //updates game round by 1
                gameRoundClone++

                let winDataClone = [...this.state.winData, {round: gameRoundClone, winner: previousWinnerClone}] //adds into array the round + winner

                this.setState(
                    {
                     winner: winnerClone,
                     gameRound: gameRoundClone,
                     previousWinner: previousWinnerClone,
                     winData: winDataClone,
                     status: false
                    }, 
                    () => {
                    this.timer = setTimeout(this.resetGameAfterWin, 5000)
                    console.log('state after win: ', this.state)
                    return true
                    
                })
            }


    }

    resetGameAfterWin () {
        //resets game after winning
        this.setState({
            board: [[null, null, null], [null, null, null], [null, null, null]],
            userTurn: 'X',
            cellAddress: [],
            status: false,
            previousWinner: ''
        })
        clearTimeout(this.timer)
    }

    undoMove () {
        //resets last played move to 'null' if there is a valid previous move (cellAddress array should have at least 1 object)
        //also resets userTurn back to current player
        //if undoMove is called when there were no previous moves, game is reset
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
        //resets game, does not count previous game as a round
        this.setState({
            board: [[null, null, null], [null, null, null], [null, null, null]],
            userTurn: 'X',
            cellAddress: [],
            status: false
        })
    }



    render () {
        return (
            <div className="contentPos">
                <div className="pageHeader">
                 Tic Tac Toe
                 {this.state.status ? 
                 (
                     <div>
                        {this.state.previousWinner} Won!
                     </div>
                 ) :
                 !this.state.status && this.state.previousWinner === 'draw' ?
                 (
                     <div>
                        It's a draw!
                     </div>
                 ) :
                 null
                 }
                </div>
                <div className="ticTacToeContainer">
                <Row rowId="0" updateScore={this.updateScore} userTurn={this.state.userTurn} board={this.state.board[0]} />
                <Row rowId="1" updateScore={this.updateScore} userTurn={this.state.userTurn} board={this.state.board[1]} />
                <Row rowId="2" updateScore={this.updateScore} userTurn={this.state.userTurn} board={this.state.board[2]} />
                </div>
                <Button className="customButtons" onClick={this.undoMove} variant="light">Undo Move</Button>
                <Button onClick={this.clearBoard} variant="light">Reset Game</Button>
                <DashboardTicTacToe round={this.state.gameRound} winner={this.state.previousWinner} winData={this.state.winData}/>
            </div>
        )
    }
}



export default Board

