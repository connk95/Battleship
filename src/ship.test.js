import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

test("creates ship", () => {
  const newBoard = new Gameboard(10);
  const battleship = new Ship("battleship", 4);
  battleship.location = newBoard.placeShip("battleship", 5, 5, "vertical");
  newBoard.ships.push(battleship);
  expect(newBoard.ships[0].size).toBe(4);
  expect(battleship.location.length).toEqual(4);
});

test("sinks ship", () => {
  const newBoard = new Gameboard(10);
  const cruiser = new Ship("cruiser", 2);
  cruiser.location = newBoard.placeShip("cruiser", 5, 5, "vertical");
  newBoard.ships.push(cruiser);
  newBoard.receiveAttack(5, 5);
  newBoard.receiveAttack(5, 6);
  expect(cruiser.sunk).toBe(true);
});
