import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Player {
  constructor(human, turn) {
    this.isHuman = human;
    this.turn = turn;
    this.myBoard = new Gameboard(10);
    this.myShips = [];
    this.shots = [];
    this.myHits = [];
    this.shotSearch = [];
  }

  place(ship, size, x, y, direction) {
    if (direction == "vertical" && y + size > this.myBoard.size) {
      alert("Please select a valid location!");
      return;
    }
    if (direction == "horizontal" && x + size > this.myBoard.size) {
      alert("Please select a valid location!");
      return;
    }
    for (let i = 0; i < this.myShips.length; i++) {
      for (let j = 0; j < this.myShips[i].location.length; j++) {
        let placedX = this.myShips[i].location[j][0];
        let placedY = this.myShips[i].location[j][1];
        if (placedX == x && placedY == y) {
          alert("There is already a ship here!");
          return;
        }
      }
    }
    let newShip = new Ship(ship, size);
    newShip.location = this.myBoard.placeShip(ship, x, y, direction);
    this.myBoard.ships.push(newShip);
    this.myShips.push(newShip);
  }

  shoot(x, y, player) {
    let attack = [x, y];
    for (let i = 0; i < this.shots.length; i++) {
      if (x == this.shots[i][0] && y == this.shots[i][1]) {
        alert("You cannot target the same spot twice!");
        return;
      }
    }
    this.shots.push(attack);
    const playerShot = player.myBoard.receiveAttack(x, y);
    if (playerShot != false) {
      this.myHits.push(playerShot);
      return true;
    }
  }

  aiPlace(ship, size) {
    let horizontalX = Math.floor(Math.random() * (this.myBoard.size - size));
    let horizontalY = Math.floor(Math.random() * this.myBoard.size);
    let verticalX = Math.floor(Math.random() * this.myBoard.size);
    let verticalY = Math.floor(Math.random() * (this.myBoard.size - size));
    for (let i = 0; i < this.myShips.length; i++) {
      for (let j = 0; j < this.myShips[i].location.length; j++) {
        let placedX = this.myShips[i].location[j][0];
        let placedY = this.myShips[i].location[j][1];
        for (let k = 0; k < size; k++) {
          if (
            (placedX == verticalX + k && placedY == verticalY + k) ||
            (placedX == horizontalX + k && placedY == horizontalY + k)
          ) {
            return;
          }
        }
      }
    }
    let newShip = new Ship(ship, size);
    let dir = Math.round(Math.random());
    if (dir > 0) {
      newShip.location = this.myBoard.placeShip(
        ship,
        horizontalX,
        horizontalY,
        "horizontal"
      );
    } else {
      newShip.location = this.myBoard.placeShip(
        ship,
        verticalX,
        verticalY,
        "vertical"
      );
    }
    this.myBoard.ships.push(newShip);
    this.myShips.push(newShip);
  }

  aiShoot(player) {
    if (this.shotSearch.length != 0) {
      let x = this.shotSearch[0][0];
      let y = this.shotSearch[0][1];
      for (let i = 0; i < this.shots.length; i++) {
        if (x == this.shots[i][0] && y == this.shots[i][1]) {
          this.shotSearch.shift();
          return this.aiShoot(player);
        }
      }
      let aiShot = player.myBoard.receiveAttack(x, y);
      this.shots.push([x, y]);
      if (aiShot == true) {
        this.myHits = [];
        this.shotSearch = [];
        return [x, y, true];
      } else if (aiShot != false) {
        this.myHits.push(aiShot);
        this.shotSearch = [];
        this.aiDestroy();
        return [x, y, true];
      } else {
        this.shotSearch.shift();
        return [x, y, false];
      }
    } else {
      this.myHits = [];
      let x = Math.floor(Math.random() * player.myBoard.size);
      let y = Math.floor(Math.random() * player.myBoard.size);
      for (let i = 0; i < this.shots.length; i++) {
        if (x == this.shots[i][0] && y == this.shots[i][1]) {
          return this.aiShoot(player);
        }
      }
      let aiShot = player.myBoard.receiveAttack(x, y);
      this.shots.push([x, y]);
      if (aiShot != false) {
        this.myHits.push(aiShot);
        this.shotSearch = [];
        this.aiDestroy();
        return [x, y, true];
      } else {
        return [x, y, false];
      }
    }
  }

  aiDestroy() {
    if (this.myHits.length == 1) {
      const x = this.myHits[0][0];
      const y = this.myHits[0][1];
      if (y < 9) {
        this.shotSearch.push([x, y + 1]);
      }
      if (y > 0) {
        this.shotSearch.push([x, y - 1]);
      }
      if (x > 0) {
        this.shotSearch.push([x - 1, y]);
      }
      if (x < 9) {
        this.shotSearch.push([x + 1, y]);
      }
    } else if (this.myHits.length > 1) {
      const x1 = this.myHits[0][0];
      const y1 = this.myHits[0][1];
      const x2 = this.myHits[this.myHits.length - 1][0];
      const y2 = this.myHits[this.myHits.length - 1][1];
      if (x1 == x2 && y1 < y2) {
        this.shotSearch.push([x1, y1 - 1], [x2, y2 + 1]);
      } else if (x1 == x2 && y1 > y2) {
        this.shotSearch.push([x1, y1 + 1], [x2, y2 - 1]);
      } else if (y1 == y2 && x1 < x2) {
        this.shotSearch.push([x1 - 1, y1], [x2 + 1, y2]);
      } else if (y1 == y2 && x1 > x2) {
        this.shotSearch.push([x1 + 1, y1], [x2 - 1, y2]);
      }
    }
  }
}
