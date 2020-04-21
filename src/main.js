
// query selectors
var topBannerSection = document.querySelector('.top-display');
var gameSection = document.querySelector('.play-area');
var leftWinSectionUl = document.querySelector('.left-win');
var rightWinSectionUl = document.querySelector('.right-win');
var gameBoardSection = document.querySelector('.game-board');

// variables
var player1 = new Player("justin", "x", undefined);
var player2 = new Player("trevor", "o", undefined);
var game = new Game(player1, player2);
window.onload = retrieveWinData();
// event listeners
topBannerSection.addEventListener('click', updateTopBanner);
gameSection.addEventListener('click', (function(){}))
// leftWinSectionUl.addEventListener('click', (function() {}))
// rightWinSection.addEventListener('click', (function() {}))
gameBoardSection.addEventListener('click', (function(event) {
  // find the click for what space it was in using event.target.closest();
  var target = event.target;
  var clickedSquare = target.closest("section > div");
  if (!clickedSquare) {
    return;
    // dont care if click something other than a square
  }
  var whosTurn = game.whosTurn()
  var squareId = clickedSquare.dataset.spaceId;
  var validMove = game.makeMove(squareId, whosTurn);
  if (validMove) {
    target.innerHTML = generateTokenHTML(whosTurn.token);
    if (game.winner !== undefined) {
      topBannerSection.innerText = `${game.winner.id} won!`;
      drawWins();
    } else if (game.isDraw()) {
      console.log("doBetter")
    }
    //check win || draw
  } else {
    alert("Please pick another space");
  }
  // check whos turn it is
  // put that player token in the space that was clicked
}))

 function drawWins() {
  leftWinSectionUl.innerHTML = "";
  rightWinSectionUl.innerHTML = "";
   for (var i = 0; i < player1.wins.length; i++) {
    var winHTML = createWinHtml(player1.wins[i]);
    leftWinSectionUl.innerHTML += winHTML;
  }
  for (var i = 0; i < player2.wins.length; i++) {
    var winHTML = createWinHtml(player2.wins[i]);
    rightWinSectionUl.innerHTML += winHTML;
  }
 }
 function createWinHtml(winningBoard) {
   return `
   <li>
    <section class="game-board mini-board">
      <div class="game-box" data-space-id="0">${generateTokenHTML(winningBoard[0])}</div>
      <div class="game-box" data-space-id="1">${generateTokenHTML(winningBoard[1])}</div>
      <div class="game-box" data-space-id="2">${generateTokenHTML(winningBoard[2])}</div>
      <div class="game-box" data-space-id="3">${generateTokenHTML(winningBoard[3])}</div>
      <div class="game-box" data-space-id="4">${generateTokenHTML(winningBoard[4])}</div>
      <div class="game-box" data-space-id="5">${generateTokenHTML(winningBoard[5])}</div>
      <div class="game-box" data-space-id="6">${generateTokenHTML(winningBoard[6])}</div>
      <div class="game-box" data-space-id="7">${generateTokenHTML(winningBoard[7])}</div>
      <div class="game-box" data-space-id="8">${generateTokenHTML(winningBoard[8])}</div>
    </section>
  </li>`
 } 
// event handlers
function updateTopBanner() {
  console.log("wtffffff")
}
// functions

function generateTokenHTML(token) {
  if (!token) {
    return "";
  }
  return `<img class="token" src="assets/${token}-token.svg" />`;
}
function retrieveWinData() {
  player1.retrieveWins();
  player2.retrieveWins();
  drawWins();
}

