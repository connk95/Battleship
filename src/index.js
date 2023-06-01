import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";

const player1 = new Player(true, true);
player1.place("cruiser", 2, 5, 5, "vertical");
player1.place("battleship", 4, 0, 0, "horizontal");
player1.place("carrier", 5, 9, 0, "vertical");
player1.place("destroyer", 3, 3, 2, "vertical");
player1.place("submarine", 3, 0, 7, "vertical");
console.log(player1.myShips);
console.log(player1.myBoard);

const ai1 = new Player(false, false);
ai1.aiPlace("carrier", 5);
console.log(ai1.myShips);
console.log(ai1.myBoard);
console.log(ai1.shots);
console.log(ai1.myHits);
console.log(ai1.shotSearch);

ai1.aiShoot(player1);
ai1.aiShoot(player1);
ai1.aiShoot(player1);
ai1.aiShoot(player1);
ai1.aiShoot(player1);
