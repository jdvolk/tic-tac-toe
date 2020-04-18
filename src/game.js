class Game {
  // game should include:
  
  constructor(player1, player2) {
    this.board = [
      "", "", "",
      "", "", "",
      "", "", "",
    ];
    // two player instances
    // var playerOne = new Player();
    // var playerTwo = new Player();
     this.isDoneState = false;
  }
  // way to keep track of the date for the game board
  isDone() {
    return this.isDoneState;
  }
  trackBoard() {

  }
  makeMove(spot, player) {
    if (this.board[spot] !== "" || (spot > 8 || spot < 0)) {
      return false;
    } else {
      this.board[spot] = player.token;
      // this.checkWinConditions();
      return true;
    }
    
  }
  // way to keep track of which players turn it is
  whosTurn() {}
  // way to check the boards data for win conditions
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
    // if (!winningConditions) {
    //   this.isDraw();
    // }

  }
  // way to detect if game is a draw
  isDraw() {}
  // way to save the boards data to correct player's win array
  saveWin() {}
  // a way to reset the game's board data to begin a new game
  resetBoard() {}
}