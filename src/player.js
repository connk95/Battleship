import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Player {
  constructor(human, turn) {
    this.isHuman = human;
    this.turn = turn;
    this.myBoard = new Gameboard(10);
    this.myShips = [];
    this.myHits = [];
  }

  place(ship, size, x, y, direction) {
    let newShip = new Ship(ship, size);
    newShip.location = this.myBoard.placeShip(ship, x, y, direction);
    this.myBoard.ships.push(newShip);
    this.myShips.push(newShip);
  }

  shoot(x, y, player) {
    const playerShot = player.myBoard.receiveAttack(x, y);
    if (playerShot != false) {
      this.myHits.push(playerShot);
    }
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

  aiShoot(player) {
    if (this.myHits.length != 0) {
      aiDestroy();
    } else {
      let x = Math.floor(Math.random() * player.myBoard.size);
      let y = Math.floor(Math.random() * player.myBoard.size);
      const aiShot = player.myBoard.receiveAttack(x, y);
      if (aiShot != false) {
        this.myHits.push(aiShot);
      }
    }
  }

  aiDestroy() {
    //the ai hits, for example, [5, 5]
    //the ai will search for the next hit at either [5, 6], [5, 4], [4, 5], or [6, 5]
    //ie. at [x, y+1], [x, y-1], [x-1, y], or [x+1, y]
    //
    //if the ai hits again at, for example, [5, 6], then we know the next hit will be at [5, 7], or at [5, 4]
    //the ai will stop shooting once the shio is determined to be sunk (the myHits array becomes empty)
    //
    //if the ai misses its second shot, for example, at [4, 5], then it will return to searching as above
    //
    //if the aiHits array contains more than one value, we should follow the value that repeats
    //for example, if we have it [5, 5], and [5, 6], then the x value of 5 is repeating
    //therefore the next shot should also use an x value of 5
  }
}
