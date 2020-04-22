class Game {
  constructor(player1, player2) {
    this.board = [
      "", "", "",
      "", "", "",
      "", "", "",
    ]; 
    this.player1 = player1;
    this.player2 = player2; 
    this.currentTurn = player1;
    this.winner = undefined;
  }

  makeMove(spot, player) {
    if (player !== this.currentTurn) {
      return false;
    }

    if (this.board[spot] !== "" || (spot > 8 || spot < 0)) {
      return false;
    } else {
      this.board[spot] = player.token;
      this.checkWinConditions(player);
      this.swapTurn();
      return true;
    }
  }
  whosTurn() {
    return this.currentTurn;
  }
  swapTurn() {
    if (this.currentTurn === this.player1) {
      this.currentTurn = this.player2;
    } else {
      this.currentTurn = this.player1;
    }
  }
  checkWinConditions(player) {
    var winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for(var i = 0; i < winningConditions.length; i++) {
      var spotOne = winningConditions[i][0]; 
      var spotTwo = winningConditions[i][1]; 
      var spotThree = winningConditions[i][2]; 
      //  loop though win condition array
      if (player.token === this.board[spotOne] && player.token === this.board[spotTwo] && player.token === this.board[spotThree]) {
        this.saveWin(player);
      } else {
        // the move on with game
      }
    }
  }
  isDraw() {
    if(!this.board.includes("") && (this.winner === undefined)) {
      return true;
    } else {
      return false;
    }
  }
  saveWin(player) {
    this.winner = player;
    player.wins.push(this.board);
    player.saveWinsToStorage();
  }
  resetBoard() {
    this.board = [
      "", "", "",
      "", "", "",
      "", "", "",
    ];
  }
  resetGame() {
    this.resetBoard();
    this.winner = undefined;
  }
}