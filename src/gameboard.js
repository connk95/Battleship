import { Ship } from "./ship";

export class Gameboard {
  constructor(size) {
    this.size = size;
    this.board = this.createBoard(size);
    this.shots = [];
    this.hits = [];
    this.ships = [];
  }

  createBoard(grid = this.size) {
    let gameboard = [];
    for (let i = 0; i < grid; i++) {
      gameboard[i] = [];
      for (let j = 0; j < grid; j++) {
        gameboard[i][j] = j;
      }
    }
    return gameboard;
  }

  placeShip(ship, x, y, direction) {
    let loc = [];
    //const placeLoc = (i = x, j) => {
    //n = battleship.size;
    //for (j = 0; j < ship.size; j++) {}
    //push [i, j + n] for vertical or [i + n, j] for horizontal
    //};
    if (ship == "battleship") {
      if (direction == "vertical") {
        loc.push([x, y], [x, y + 1], [x, y + 2], [x, y + 3]);
      } else if (direction == "horizontal") {
        loc.push([x, y], [x + 1, y], [x + 2, y], [x + 3, y]);
      }
    }
    if (ship == "carrier") {
      if (direction == "vertical") {
        loc.push([x, y], [x, y + 1], [x, y + 2], [x, y + 3], [x, y + 4]);
      } else if (direction == "horizontal") {
        loc.push([x, y], [x + 1, y], [x + 2, y], [x + 3, y], [x + 4, y]);
      }
    }
    if (ship == "cruiser") {
      if (direction == "vertical") {
        loc.push([x, y], [x, y + 1]);
      } else if (direction == "horizontal") {
        loc.push([x, y], [x + 1, y]);
      }
    }
    if (ship == "destroyer") {
      if (direction == "vertical") {
        loc.push([x, y], [x, y + 1], [x, y + 2]);
      } else if (direction == "horizontal") {
        loc.push([x, y], [x + 1, y], [x + 2, y]);
      }
    }
    if (ship == "submarine") {
      if (direction == "vertical") {
        loc.push([x, y], [x, y + 1], [x, y + 2]);
      } else if (direction == "horizontal") {
        loc.push([x, y], [x + 1, y], [x + 2, y]);
      }
    }
    this.ships.push(loc);
    return loc;
  }

  receiveAttack(x, y) {
    let attack = [x, y];
    this.shots.push(attack);
    for (let i = 0; i < this.ships.length; i++) {
      for (let j = 0; j < this.ships[i].length; j++) {
        if (x == this.ships[i][j][0] && y == this.ships[i][j][1]) {
          this.hits.push(attack);
        }
      }
    }
  }
}
