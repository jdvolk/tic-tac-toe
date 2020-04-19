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
    this.winner = undefined;
  }
  // way to keep track of the date for the game board
  trackBoard() {
  }
  makeMove(spot, player) {
    if (this.board[spot] !== "" || (spot > 8 || spot < 0)) {
      return false;
    } else {
      this.board[spot] = player.token;
      this.checkWinConditions(player);
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
    for(var i = 0; i < winningConditions.length; i++) {
      var spotOne = winningConditions[i][0]; 
      var spotTwo = winningConditions[i][1]; 
      var spotThree = winningConditions[i][2]; 
      //  loop though win condition array
      if (player.token === this.board[spotOne] && player.token === this.board[spotTwo] && player.token === this.board[spotThree]) {
        this.saveWin(player);
        // this.completeGame(player, true);
        // then player won
      } else {
        // the move on with game
      }
    }
    // if (!winningConditions) {
      //   this.isDraw();
      // } 
  }
  // completeGame(player, isWin) {
  //   if (isWin === true) {
  //     this.saveWin(player);
  //   }
    // save win to storage
    // game state is done
    // reset the board
  // }
  // way to detect if game is a draw
  isDraw() {
    if(!this.board.includes("") && (this.winner === undefined)) {
      return true;
    } else {
      return false;
    }
  }
  // way to save the boards data to correct player's win array
  saveWin(player) {
    this.winner = player;
    player.wins.push(this.board);
    player.saveWinsToStorage();
  }
  // a way to reset the game's board data to begin a new game
  resetBoard() {
    this.board = [
      "", "", "",
      "", "", "",
      "", "", "",
    ];
  }
}