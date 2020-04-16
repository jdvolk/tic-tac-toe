class Game {
  // game should include:
  constructor() {
    // two player instances
    var playerOne = new Player();
    var playerTwo = new Player();

  }
  // way to keep track of the date for the game board
  trackBoard() {}
  // way to keep track of which players turn it is
  whosTurn() {}
  // way to check the boards data for win conditions
  checkWinConditions() {}
  // way to detect if game is a draw
  isDraw() {}
  // way to save the boards data to correct player's win array
  saveWin() {}
  // a way to reset the game's board data to begin a new game
  resetBoard() {}
}