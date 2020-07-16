

export function checkWinnings (boardArr) {
    //check across
    if (boardArr[0][0] !== null && boardArr[0][0] === boardArr[0][1] && boardArr[0][0] === boardArr[0][2]) {
        return boardArr[0][0]
    }
    if (boardArr[1][0] !== null && boardArr[1][0] === boardArr[1][1]  && boardArr[1][0]  === boardArr[1][2]) {
        return boardArr[1][0]
    }
    if (boardArr[2][0] !== null && boardArr[2][0] === boardArr[2][1] && boardArr[2][0] === boardArr[2][2]) {
        return boardArr[2][0]
    }
    //check down
    if (boardArr[0][0] !== null && boardArr[0][0] === boardArr[1][0] && boardArr[0][0] === boardArr[2][0]) {
        return boardArr[0][0]
    }
    if (boardArr[0][1] !== null && boardArr[0][1] === boardArr[1][1] && boardArr[0][1] === boardArr[2][1]) {
        return boardArr[0][1]
    }
    if (boardArr[0][2] !== null && boardArr[0][2] === boardArr[1][2] && boardArr[0][2] === boardArr[2][2]) {
        return boardArr[0][2]
    }
    //check diagonally
    if (boardArr[0][0] !== null && boardArr[0][0] === boardArr[1][1]  && boardArr[0][0] === boardArr[2][2]) {
        return boardArr[0][0]
    }
    if (boardArr[2][0] !== null && boardArr[2][0] === boardArr[1][1] && boardArr[2][0] === boardArr[0][2]) {
        return boardArr[2][0]
    }

    return false
}

export function isBoardFull (boardArr) {

        let status = true  //false means a null has been found = board not full

        for (let j = 0; j < boardArr.length; j++) {
            let row = boardArr[j]
            for (let i = 0; i < row.length; i++) {
                let cell = row[i]
                if (cell === null) {
                    status = false //found a null
                }
            }
        }
        return status
    //if boardFull is false: board is not full; if it's true board is full
}