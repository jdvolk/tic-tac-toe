
var topBannerSection = document.querySelector('.top-display');
var leftWinSectionUl = document.querySelector('.left-win');
var rightWinSectionUl = document.querySelector('.right-win');
var activeGame = document.querySelector('#active-game');
var player1 = new Player('player1', 'x', undefined);
var player2 = new Player('player2', 'o', undefined);
var game = new Game(player1, player2);
window.onload = retrieveWinData();
activeGame.addEventListener('click', mainGame);

function mainGame(event) {
  var target = event.target;
  var clickedSquare = target.closest('section > div');
  if (!clickedSquare) {
    return;
  }
  if(game.winner !== undefined || game.isDraw()) {
    resetGame();
    return;
  }
  var whosTurn = game.whosTurn()
  var squareId = clickedSquare.dataset.spaceId;
  var validMove = game.makeMove(squareId, whosTurn);
  if (validMove) {
    target.innerHTML = generateTokenHTML(whosTurn.token);
    if (game.winner !== undefined) {
      updateTopBanner(`${game.winner.token.toUpperCase()} won!`);
      drawWins();
    } else if (game.isDraw()) {
      updateTopBanner("Game is a draw");
    }
  } else {
    alert("Please pick another space");
  }
}

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

function updateTopBanner(string) {
  if(string) {
    topBannerSection.innerText = string;
  } else {
    topBannerSection.innerText = "Lets Play!";
  }
}

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

function resetGame() {
  game.resetGame();
  var playedTokens = activeGame.querySelectorAll('.token');
  for (var i = 0; i < playedTokens.length; i++) {
    playedTokens[i].remove();
  }
  updateTopBanner();
}