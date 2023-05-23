class Gameboard {
  constructor(size) {
    this.size = size;
    this.board = this.createBoard(size);
    this.shots = [];
    this.hits = [];
  }

  createBoard(grid = this.size) {
    let gameboard = [];
    for (let i = 0; i < grid; i++) {
      for (let j = 0; j < grid; j++) {
        gameboard.push([String.fromCharCode(96 + i), j]);
      }
    }
    return gameboard;
  }
}

const board10 = new Gameboard(10);

console.log(board10.board);
