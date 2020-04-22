class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = wins || [];
  }
  
  saveWinsToStorage() {
    localStorage.setItem(`player_${this.id}_wins`, JSON.stringify(this.wins));
  }
  retrieveWins() {
    this.wins = JSON.parse(localStorage.getItem(`player_${this.id}_wins`));
    if (this.wins === null) {
      this.wins = [];
    }
  }
}