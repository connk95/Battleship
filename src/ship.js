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
    console.log("Hit!");
    this.hits.push(tile);
    this.isSunk();
  }

  isSunk() {
    if (this.hits.length == this.size) {
      this.sunk = true;
      //pop this ship from the gameboard's array of ships, and add that ship to the opposite player's sunk ships
      //reset the ai's hit array so that it will begin to fire randomly again
      console.log(`You sunk my ${this.name}!`);
    }
    return;
  }
}
