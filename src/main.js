
function playGame() {
  debugger
  var player1 = new Player("justin", "x", undefined);
  var player2 = new Player("trevor", "o", undefined);
  var game1 = new Game(player1, player2);
  for(;;) {
    // player choses spot
    var moveResult = game1.makeMove(0 ,player1);
    var moveResult = game1.makeMove(1, player2);
    var moveResult = game1.makeMove(2, player1);
    var moveResult = game1.makeMove(3, player2);
    var moveResult = game1.makeMove(5, player1);
    var moveResult = game1.makeMove(4, player2);
    var moveResult = game1.makeMove(7, player1);
    var moveResult = game1.makeMove(6, player2);
    var moveResult = game1.makeMove(8, player1);
    // check spot taken
    // if taken ask again
    if (moveResult === false) {
      // ask again
    }
    if (game1.winner !== undefined) {
      console.log(game1.winner)
    } else if (game1.isDraw()) {
      console.log("doBetter")
    }
    // if not taken mark spot
    // check board for win conditions
    game1.resetBoard();
    break;
    // remove break after testing
  }

}

