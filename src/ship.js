export class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.location = [];
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
