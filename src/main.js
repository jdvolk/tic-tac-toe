
function playGame() {
  debugger
  var player1 = new Player("justin", "x", undefined);
  var player2 = new Player("trevor", "o", undefined);
  var game1 = new Game(player1, player2);
  for(;;) {
    // player choses spot
    var moveResult = game1.makeMove(5 ,player1);
    var moveResult = game1.makeMove(7, player2);
    var moveResult = game1.makeMove(2, player1);
    var moveResult = game1.makeMove(6, player2);
    var moveResult = game1.makeMove(8, player1);
    // check spot taken
    // if taken ask again
    if (moveResult === false) {
      // ask again
    }
    // if not taken mark spot
    // check board for win conditions
    if (game1.isDone() === true) {
      // save wins
      // reset board
      // update wins with number of boards in wins.length
      break;
    }
    break;
    // remove break after testing
  }

}

