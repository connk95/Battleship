import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

test("creates player", () => {
  const player1 = new Player(true, true);
  expect(player1.isHuman).toBe(true);
  expect(player1.turn).toBe(true);
  expect(player1.myBoard.size).toBe(10);
});

test("creates ai player", () => {
  const ai1 = new Player(false, true);
  expect(ai1.isHuman).toBe(false);
});

test("adds ship to array", () => {
  const player1 = new Player(true, true);
  player1.place("cruiser", 2, 5, 5, "vertical");
  expect(player1.myShips.length).toBe(1);
  expect(player1.myShips[0].name).toBe("cruiser");
  expect(player1.myShips[0].location[0]).toEqual([5, 5]);
  expect(player1.myShips[0].location[1]).toEqual([5, 6]);
});

test("shoots, hits, and misses", () => {
  const player1 = new Player(true, true);
  player1.place("cruiser", 2, 5, 5, "vertical");
  const player2 = new Player(true, true);
  player2.place("cruiser", 2, 5, 5, "vertical");
  player1.shoot(5, 5, player2);
  player1.shoot(5, 4, player2);
  expect(player1.shots[0]).toEqual([5, 5]);
  expect(player1.myHits[0]).toEqual([5, 5]);
  expect(player1.shots[1]).toEqual([5, 4]);
  expect(player1.myHits[1]).toBe(undefined);
  expect(player2.myShips[0].hits[0]).toEqual([5, 5]);
});

test("ai methods function", () => {
  const ai1 = new Player(false, true);
  const player1 = new Player(true, false);
  ai1.aiPlace("cruiser", 2);
  ai1.aiShoot(player1);
  expect(ai1.myShips.length).toBe(1);
  expect(ai1.shots.length).toBe(1);
});
