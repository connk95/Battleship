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

  shoot(x, y, player) {
    player.myBoard.receiveAttack(x, y);
  }

  aiPlace(ship, size) {
    let newShip = new Ship(ship, size);
    let dir = Math.round(Math.random());
    if (dir > 0) {
      newShip.location = this.myBoard.placeShip(
        ship,
        Math.floor(Math.random() * (this.myBoard.size - size)),
        Math.floor(Math.random() * this.myBoard.size),
        "horizontal"
      );
    } else {
      newShip.location = this.myBoard.placeShip(
        ship,
        Math.floor(Math.random() * this.myBoard.size),
        Math.floor(Math.random() * (this.myBoard.size - size)),
        "vertical"
      );
    }
    this.myBoard.ships.push(newShip);
    this.myShips.push(newShip);
  }

  aiShoot(x, y, player) {}
}
