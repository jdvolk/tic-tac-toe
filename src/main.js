// query selectors
var topBannerSection = Document.querySelector("top-display");
var gameSection = Document.querySelector('play-area');
var leftWinSection = Document.querySelector('right-win');
var rightWinSection = Document.querySelector('right-win');
var gameBoardSection = Document.querySelector('game-board');
var squareOne = Document.querySelector("space-1");
var squareTwo = Document.querySelector('space-2');
var squareThree = Document.querySelector('space-2');
var squareFour = Document.querySelector('space-2');
var squareFive = Document.querySelector('space-2');
var squareSix = Document.querySelector('space-2');
var squareSeven = Document.querySelector('space-2');
var squareEight = Document.querySelector('space-2');

// variables
// event listeners
topBannerSection.addEventListener('click', updateTopBanner)
gameSection.addEventListener('click' (function(){}))
leftWinSection.addEventListener('click', (function() {}))
rightWinSection.addEventListener('click', (function() {}))
gameBoardSection.addEventListener('click', (function() {}))
// functions for each square or can just use the closest()
squareOne.addEventListener('click' (function(){})) 
squareTwo.addEventListener('click' (function(){}))
squareThree.addEventListener('click' (function(){}))
squareFour.addEventListener('click' (function(){}))
squareFive.addEventListener('click' (function(){}))
squareSix.addEventListener('click' (function(){}))
squareSeven.addEventListener('click' (function(){}))
squareEight.addEventListener('click' (function(){}))

// event handlers
function updateTopBanner() {}
// functions
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

