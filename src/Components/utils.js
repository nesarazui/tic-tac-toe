

export function checkWinnings (boardArr) {
    console.log('hit')
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
        console.log('came here?')
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