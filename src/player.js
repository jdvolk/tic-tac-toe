class Player {
  constructor(id, token, wins) {
    // properties should include id, token, wins(ex: [])
    this.id = id;
    this.token = token;
    this.wins = wins || [];
  }
  // methods must include but not limited to:
  saveWinsToStorage() {
    // this.wins.push(board);
    localStorage.setItem(`player_${this.id}_wins`, JSON.stringify(this.wins));
  }
  retrieveWins() {
    this.wins = JSON.stringify(localStorage.getItem(`player_${this.id}_wins`));
  }
}