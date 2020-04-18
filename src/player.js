class Player {
  constructor(id, token, wins) {
    // properties should include id, token, wins(ex: [])
    this.id = id;
    this.token = token;
    this.wins = wins || [];

    // this.isTurn = false;
  }
  // methods must include but not limited to:
  saveWinsToStorage() {
    this.wins = localStorage.setItem(`player_${this.id}_wins`, JSON.stringify(this.wins)) || [];
  }
  retrieveWinsFromStorage() {
    this.wins = JSON.stringify(localStorage.getItem(`player_${this.id}_wins`));
  }
  updateWins() {
    // update wins array with game winning conditions;
  }
  // updateTurn() {
  //   this.turn = !this.turn;
  // }
}