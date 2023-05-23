class Ship {
  constructor(name, size, location) {
    this.name = name;
    this.size = size;
    this.location = location;
    this.sunk = false;
  }

  hit(tile) {
    const index = this.location.indexOf(tile);
    if (index > -1) {
      this.location.splice(index, 1);
    }
    this.isSunk();
  }

  isSunk() {
    if (this.location.length == 0) {
      this.sunk = true;
      console.log(`You sunk my ${this.name}!`);
    } else {
      console.log("Hit!");
    }
    return;
  }
}

const battleship = new Ship("battleship", 4, ["a1", "b1", "c1", "d1"]);

console.log(battleship);
