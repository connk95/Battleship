import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

const board = new Gameboard(10);

const battleship = new Ship("battleship", 4);
battleship.location = board.placeShip("battleship", 0, 0, "horizontal");
board.ships.push(battleship);

const cruiser = new Ship("cruiser", 2);
cruiser.location = board.placeShip("cruiser", 5, 5, "vertical");
board.ships.push(cruiser);

board.receiveAttack(5, 5);

board.receiveAttack(5, 6);

console.log(battleship);

console.log(cruiser);

console.log(board);
