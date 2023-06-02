import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";

const content = document.getElementById("content");
const myGrid = document.getElementById("myGrid");
const aiGrid = document.getElementById("aiGrid");

const player1 = new Player(true, true);

//change placement axis
const axisButton = document.getElementById("direction");
let direction = "vertical";
axisButton.addEventListener("click", () => {
  if (direction == "vertical") {
    direction = "horizontal";
  } else if (direction == "horizontal") {
    direction = "vertical";
  }
});

const makeGrid = (size, parent) => {
  let tileID = 0;
  //create grid columns (x)
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.id = i;
    parent.appendChild(column);
    //create grid rows (y)
    for (let j = 0; j < size; j++) {
      let tile = document.createElement("div");
      //give tile id according to grid position
      if (tileID < 10) {
        tile.id = `0${tileID}`;
      } else {
        tile.id = tileID;
      }
      tileID++;
      tile.classList.add("tile");
      //show ship preview on hover
      tile.addEventListener("mouseover", () => {
        tile.classList.add("hover");
      });
      //place ship
      tile.addEventListener("click", () => {
        const xPosString = String(tile.id)[0];
        const x = Number(xPosString);
        const yPosString = String(tile.id).slice(-1);
        const y = Number(yPosString);
        //place all ships from longest to shortest
        if (player1.myShips.length == 0) {
          player1.place("carrier", 5, x, y, direction);
        } else if (player1.myShips.length == 1) {
          player1.place("battleship", 4, x, y, direction);
        } else if (player1.myShips.length == 2) {
          player1.place("destroyer", 3, x, y, direction);
        } else if (player1.myShips.length == 3) {
          player1.place("submarine", 3, x, y, direction);
        } else if (player1.myShips.length == 4) {
          player1.place("cruiser", 2, x, y, direction);
        } else {
          alert("You have no ships remaining!");
        }
        console.log(player1.myShips);
        console.log(player1.myBoard);
      });
      column.appendChild(tile);
    }
  }
};

// const preview = () => {
//     const tile = document.getElementsByClassName("tile");
//     tile.addEventListener("mouseover", () => {
//       console.log("test");
//       tile.classList.add("hover");
//     });
//   };

makeGrid(10, myGrid);

//makeGrid(10, aiGrid);

// const player1 = new Player(true, true);
// player1.place("cruiser", 2, 5, 5, "vertical");
// player1.place("battleship", 4, 0, 0, "horizontal");
// player1.place("carrier", 5, 9, 0, "vertical");
// player1.place("destroyer", 3, 3, 2, "vertical");
// player1.place("submarine", 3, 0, 7, "vertical");
// console.log(player1.myShips);
// console.log(player1.myBoard);

// const ai1 = new Player(false, false);
// ai1.aiPlace("carrier", 5);
// console.log(ai1.myShips);
// console.log(ai1.myBoard);
// console.log(ai1.shots);
// console.log(ai1.myHits);
// console.log(ai1.shotSearch);

// ai1.aiShoot(player1);
// ai1.aiShoot(player1);
// ai1.aiShoot(player1);
// ai1.aiShoot(player1);
// ai1.aiShoot(player1);
