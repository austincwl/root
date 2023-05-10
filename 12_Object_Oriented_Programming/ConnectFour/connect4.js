/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

//const WIDTH = 7;
//const HEIGHT = 6;

//let currPlayer = 1; // active player: 1 or 2
//let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *   board = array of rows, each row is array of cells  (board[y][x])
 */
//each row of cells is put into an array of rows

class Player {
  constructor(color){
    this.color = color;
  }
}

const bob = new Player("green");
const pop = new Player("orange");

function startGame(){
  console.log("startGame")
  new Game(bob,pop);
}

const startBtn = document.querySelector('button');
startBtn.addEventListener('click',startGame);

class Game {
  constructor(player1, player2 ,height = 6,width = 7){
    console.log("constructor")
    this.height = height;
    this.width = width;
    this.player1 = player1;
    this.player1.num = 1;
    this.player2 = player2;
    this.player2.num = 2;
    this.currPlayer = player1;
    this.board = [];
    this.makeBoard();
    this.makeHtmlBoard();
    this.over = false;
  }
  makeBoard() {
    console.log("make board")
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

  /** makeHtmlBoard: make HTML table and row of column tops. */

  makeHtmlBoard() {
    console.log("makeHtmlBoard")
    console.log(`this.width = ${this.width}`)
    const boardDoc = document.getElementById('board');
    boardDoc.innerHTML = '';

    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');

    this.handleGameClick = this.handleClick.bind(this)

    top.addEventListener('click', this.handleGameClick);

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }

    boardDoc.append(top);

    // make main part of board
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');

      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }

      boardDoc.append(row);
    }
  }

  /** findSpotForCol: given column x, return top empty y (null if filled) */

  findSpotForCol(x) {
    console.log("findSpotForCol")
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  /** placeInTable: update DOM to place piece into HTML table of board */

  placeInTable(y, x) {
    console.log("placeInTable")
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.classList.add(`p${this.currPlayer.num}`);
    piece.style.top = -50 * (y + 2);
    piece.style.backgroundColor = this.currPlayer.color;

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }

  /** endGame: announce game end */

  endGame(msg) {
    console.log("endGame")
    this.over = true;
    alert(msg);
  }

  /** handleClick: handle click of column top to play piece */

  handleClick(evt) {
    console.log("handleClick");
    console.log("this.currPlayer:")
    console.log(this.currPlayer);
    if(!this.over){
      // get x from ID of clicked cell
      const x = +evt.target.id;
      console.log(x);
      // get next spot in column (if none, ignore click)
      const y = this.findSpotForCol(x);
      if (y === null) {
        return;
      }

      // place piece in board and add to HTML table
      this.board[y][x] = this.currPlayer;
      console.log("this.board[y][x]:");
      console.log(this.board[y][x]);
      this.placeInTable(y, x);
      
      // check for win
      if (this.checkForWin()) {
        return this.endGame(`Player ${this.currPlayer.num} won!`);
      }
      
      // check for tie
      if (this.board.every(row => row.every(cell => cell))) {
        return this.endGame('Tie!');
      }
        
      // switch players
      this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1;
    }
  }
      /** checkForWin: check board cell-by-cell for "does a win start here?" */

  checkForWin() {
    console.log("checkForWin")
    
    const _win = cells => 
      cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer
      );
    

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }
}

