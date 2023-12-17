Here's a code example that meets your criteria. The filename is "sophisticated_code.js" and it is a complex implementation of the Tic-Tac-Toe game:

```javascript
// Filename: sophisticated_code.js
// Content: Sophisticated Tic-Tac-Toe Game Implementation

// Global variables
const PLAYER_X = 'X';
const PLAYER_O = 'O';

let currentPlayer = PLAYER_X;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Function to display the board on the console
function displayBoard() {
  console.log('-------------');
  for (let i = 0; i < 3; i++) {
    let rowStr = '|';
    for (let j = 0; j < 3; j++) {
      rowStr += ` ${board[i][j]} |`;
    }
    console.log(rowStr);
    console.log('-------------');
  }
}

// Function to check if any player has won
function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === currentPlayer &&
      board[i][1] === currentPlayer &&
      board[i][2] === currentPlayer
    ) {
      return true;
    }

    if (
      board[0][i] === currentPlayer &&
      board[1][i] === currentPlayer &&
      board[2][i] === currentPlayer
    ) {
      return true;
    }
  }

  if (
    board[0][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][2] === currentPlayer
  ) {
    return true;
  }

  if (
    board[0][2] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][0] === currentPlayer
  ) {
    return true;
  }

  return false;
}

// Function to check if the board is full
function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }

  return true;
}

// Function to handle player's move
function handleMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    displayBoard();

    if (checkWin()) {
      console.log(`Player ${currentPlayer} wins!`);
      process.exit(0);
    } else if (isBoardFull()) {
      console.log('It\'s a draw!');
      process.exit(0);
    }

    currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
  } else {
    console.log('Invalid move! That cell is already occupied.');
  }
}

// Initial game prompt
console.log('Welcome to Tic-Tac-Toe!');
displayBoard();

// Game loop
while (true) {
  const row = parseInt(prompt('Enter the row (0-2) where you want to place your symbol:'));
  const col = parseInt(prompt('Enter the column (0-2) where you want to place your symbol:'));

  if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2) {
    console.log('Invalid input! Please enter a valid row and column.');
    continue;
  }

  handleMove(row, col);
}
```

Please note that the code includes a prompt for user input, so it would be best executed in an environment that supports user interactions, such as a web browser console or a Node.js environment.