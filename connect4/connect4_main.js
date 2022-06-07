// Top level Variables

let playArea = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

let player1 = true
const orangeText = "Orange"
const orangeCounter = document.getElementById("orangeCounter")
const greenText = "Green"
const greenCounter = document.getElementById("greenCounter")
const Turn = document.getElementById("whoseTurn")
    Turn.innerText = whoseTurn()

// Functions

// Text to say whose turn;
function whoseTurn() {
    return player1 === true ? orangeText: greenText;
}

// Fuction to take turn         
// NEEDS TO CHANGE FOR PIECES DROPPING.
// only column parameter returns invalid move.
// only row parameter returns invalid move.

function takeTurn(row, column) {
    console.log("function takeTurn was called")
    if (playArea[row][column] === null && player1 === true) {
        playArea[row][column] = "orange"
        player1 = false
        // console.log(yellowText)
    }   else if (playArea[row][column] === null) { 
            playArea[row][column] = "green"
            player1 = true
            // console.log(redText)
        }   else {
                alert("This is an invalid move! Try again.")
                console.log("Invalid move request")
            }
Turn.innerText = whoseTurn()
}

// unedited function places counter where click is placed
// function takeTurn(row, column) {
//     console.log("function takeTurn was called")
//     if (playArea[row][column] === null && player1 === true) {
//         playArea[row][column] = "orange"
//         player1 = false
//         // console.log(yellowText)
//     }   else if (playArea[row][column] === null) { 
//             playArea[row][column] = "green"
//             player1 = true
//             // console.log(redText)
//         }   else {
//                 alert("This is an invalid move! Try again.")
//                 console.log("Invalid move request")
//             }
// Turn.innerText = whoseTurn()
// }

function getPlayArea() {
    console.log("getPlayArea was called")
        return playArea
}

// Clears the playArea Array
function clearBoard() {
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = ""
        }
    }
}

// Populates grid with images
function drawBoard(playArea) {
    clearBoard();
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            if (!playArea[rowIndex][columnIndex]) {
                continue;
            }
            const counter = playArea[rowIndex][columnIndex] === "orange" ? orangeCounter : greenCounter;
            const counterCopy = counter.cloneNode()
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).appendChild(counterCopy);
        }
    }
}

// function isValidRowOrColumn(array) {
//     console.log("This is array", array)
//     return Array.isArray(array);  // or 7?
// }

// function isValidColumn(columnArray) {
//     console.log("this is column array", columnArray)
//     return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return ["orange", "green", null].includes(item); });
// }

// A grid position was clicked
function positionClick(rowIndex, columnIndex, event) {
    takeTurn(rowIndex, columnIndex);
    const board = getPlayArea();
    // if (!isValidRowOrColumn(board) || !board.every(isValidColumn)) {
    //     throw "Expecting 'getBoard' to return a 2d array where all values match are null or string. Actually received: " + JSON.stringify(playArea);
    // }
    drawBoard(playArea);
        // UNCOMMENT WHEN checkWinner function is complete
    // const winner = checkWinner();
    // if (winner) {
    //     if (typeof winner !== "string" || !["orange", "green", "nobody"].includes(winner)) {
    //         throw "Expecting 'checkWinner' to return null or one of the strings 'orange', 'green' or 'nobody'. Actually received: " + winner;
    //     }
    //     const winnerName = document.getElementById("winner-name");
    //     winnerName.innerText = winner;
    //     const winnerDisplay = document.getElementById("winner-display");
    //     winnerDisplay.style.display = "block";
    // }
}

// Bind the click events for the grid.
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
        gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex));
    }
}

// Function reset game to start
function resetGame() {
    console.log("function resetGame was called")
        return playArea = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]
        ]
}

// Function to check for a winner   
// WRITE A FUNCTION THAT CHECKS FOR 4 IN A ROW
        // function checkWinner()

// ref to id = "winDisp"
// ref to id = "winner"

// ref to id = "grid" => in html?

function resetClick(event) {
    resetGame();
        // UNCOMMENT WHEN checkWinner function is complete
    // const winnerName = document.getElementById("winner-name");
    // winnerName.innerText = "";
    // const winnerDisplay = document.getElementById("winner-display");
    // winnerDisplay.style.display = "None";
    clearBoard();
}

// Bind the click event for the reset button.
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetClick);
