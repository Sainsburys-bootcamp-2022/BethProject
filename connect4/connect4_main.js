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
    return player1 === true ? orangeText : greenText;
}

//Places counter at the bottom of the column
const counterPlace = (column, playArea) => {
    for (let i = playArea.length; i > 0; i--) {
        if (playArea[i - 1][column] === null) {
            return i - 1
        }
    }
}

// Fuction to take turn         
function takeTurn(column) {
    const row = counterPlace(column, playArea)
    console.log(row)
    console.log("function takeTurn was called")
    if (playArea[row] === undefined) {
        alert("This is an invalid move! Try again.")
        console.log("Invalid move request")
    } else if (playArea[row][column] === null && player1 === true) {
        playArea[row][column] = "orange"
        player1 = false
    } else if (playArea[row][column] === null) {
        playArea[row][column] = "green"
        player1 = true
    }
    Turn.innerText = whoseTurn()
    console.log(playArea)
    checkWinner()
}

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

// Function to check for a winner   
// WRITE A FUNCTION THAT CHECKS FOR 4 IN A ROW
function checkWinner() {
    // horizontalWin() // WORKING
    // verticalWin() // WORKING
    // diagonalRightWin() // WORKING
    diagonalLeftWin()
}
// ref to id = "winDisp" to make it show when winner detected.
// ref to id = "winner" to display winner in winDisp

function horizontalWin() {
    console.log("checking for horizontal win")
    for (let row = 0; row < 6; row++) {
        for (let i = 0; i < 4; i++) {
            if (
                (playArea[row][i] !== null)
                && (playArea[row][i] === playArea[row][i + 1])
                && (playArea[row][i + 1] === playArea[row][i + 2])
                && (playArea[row][i + 2] === playArea[row][i + 3])
            ) console.log("horizontal win detected")
        }
    }
}

function verticalWin() {
    for (let row = 5; row >= 3; row--) {
        for (let i = 0; i < 4; i++) {
            if (
                (playArea[row][i] !== null)
                && (playArea[row][i] === playArea[row - 1][i])
                && (playArea[row - 1][i] === playArea[row - 2][i])
                && (playArea[row - 2][i] === playArea[row - 3][i])
            ) console.log("vertical win detected")
        }
    }
}

function diagonalRightWin() {
    for (let row = 5; row >= 3; row--) {
        for (let i = 0; i < 4; i++) {
            if (
                (playArea[row][i] !== null)
                && (playArea[row][i] === playArea[row - 1][i + 1])
                && (playArea[row - 1][i + 1] === playArea[row - 2][i + 2])
                && (playArea[row - 2][i + 2] === playArea[row - 3][i + 3])
            ) console.log("right diagonal win detected")
        }
    }
}

function diagonalLeftWin() {
    for
}

// function checks both diagonals?
// function diagonalWin() {
//     for (let row = 5; row>= 3; row--) {
//         for (let i = 0; i < 4; i++) {
//             if (
//             ((playArea[row][i] !== null)
//             && (playArea[row][i] === playArea[row - 1][i + 1])
//             && (playArea[row - 1][i + 1] === playArea[row - 2][i + 2])
//             && (playArea[row - 2][i + 2] === playArea[row - 3][i + 3]))
//             ||
//             ((playArea[row][i] !== null)
//             && (playArea[row][i] === playArea[row - 1][i - 1])
//             && (playArea[row - 1][i - 1] === playArea[row - 2][i - 2])
//             && (playArea[row - 2][i + 2] === playArea[row - 3][i - 3]))
//             ) 
//             console.log("diagonal true")
//         }
//     }
// }

// A grid position was clicked
function positionClick(columnIndex, event) {
    takeTurn(columnIndex);
    const board = getPlayArea();
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
        gridPosition.addEventListener("click", positionClick.bind(null, columnIndex));
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
