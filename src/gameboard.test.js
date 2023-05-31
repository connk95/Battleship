import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

test("creates gameboard", () => {
  const newBoard = new Gameboard(10);
  expect(newBoard.size).toBe(10);
  expect(newBoard.hits.length).toBe(0);
  expect(newBoard.shots.length).toBe(0);
});

test("creates grid", () => {
  const newBoard = new Gameboard(10);
  expect(newBoard.board[0][0]).toBe(0);
});

test("receives hit", () => {
  const newBoard = new Gameboard(10);
  const cruiser = new Ship("cruiser", 2);
  cruiser.location = newBoard.placeShip("cruiser", 5, 5, "vertical");
  newBoard.ships.push(cruiser);
  newBoard.receiveAttack(5, 5);
  expect(newBoard.shots[0]).toEqual([5, 5]);
  expect(newBoard.hits[0]).toEqual([5, 5]);
});
