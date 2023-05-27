import { Gameboard } from "./gameboard";

export class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.location = [];
    this.hits = [];
    this.sunk = false;
  }

  hit(tile) {
    console.log("Hit!");
    this.hits.push(tile);
    this.isSunk();
  }

  isSunk() {
    if (this.hits.length == this.size) {
      this.sunk = true;
      console.log(`You sunk my ${this.name}!`);
    }
    return;
  }
}
