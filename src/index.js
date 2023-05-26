import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

const battleship = new Ship("battleship", 4);

const cruiser = new Ship("cruiser", 2);

const board = new Gameboard(10);

battleship.location = board.placeShip("battleship", 0, 0, "horizontal");

cruiser.location = board.placeShip("cruiser", 5, 5, "vertical");

console.log(battleship);

console.log(cruiser);

board.receiveAttack(5, 5);

//board.placeShip("battleship", 0, 0, "horizontal");

console.log(board);
