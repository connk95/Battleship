import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Player {
  constructor(human, turn) {
    this.isHuman = human;
    this.turn = turn;
    this.myBoard = new Gameboard(10);
    this.myShips = [];
  }

  place(ship, size, x, y, direction) {
    let newShip = new Ship(ship, size);
    newShip.location = this.myBoard.placeShip(ship, x, y, direction);
    this.myBoard.ships.push(newShip);
    this.myShips.push(newShip);
  }

  takeShot(x, y, player) {}

  receiveShot(x, y, player) {}
}
