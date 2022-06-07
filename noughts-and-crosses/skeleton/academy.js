// Make your changes to store and update game state in this file

let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const winMovesArray =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let player1 = true
const noughtText = "Noughts"
const crossText = "Crosses"
const Turn = document.getElementById("whoseTurn")
    Turn.innerText = whoseTurn()

// ^^ These are defined for the whole document.


// Text to say whose turn
 function whoseTurn() {
    return player1 === true ? crossText: noughtText;
}   
    
// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    if (board[row][column] === null && player1 === true) {
        board[row][ column] = "cross"
        player1 = false
        // console.log(noughtText)
    }   else if (board[row][column] === null)   {
            board[row][column] = "nought"
            player1 = true
            // console.log(crossText)
        }   else    {
                alert("This is an invalid move! Try again.")
                console.log("Invalid move")
            }
    Turn.innerText = whoseTurn()
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    // const winner =
    // if (compare winning arrays)
    // else
    return console.log("The Winner is", winner);
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called")
    return board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
     ];
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called")
        return board
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
