import { Gameboard } from "./gameboard";
import { Player } from "./player";

export class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.location = [];
    this.hits = [];
    this.sunk = false;
  }

  hit(tile) {
    this.hits.push(tile);
    this.isSunk();
    if (this.sunk == true) {
      return true;
    }
  }

  isSunk() {
    if (this.hits.length == this.size) {
      this.sunk = true;
      alert(`You sunk my ${this.name}!`);
    }
  }
}
