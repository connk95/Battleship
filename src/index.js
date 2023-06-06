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
      //TEST PREVIEW OUTSIDE OF THIS FUNCTION

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
      });
      column.appendChild(tile);
    }
  }
};

//preview position of ships
const preview = (size, pos) => {
  let tile = document.querySelector("#tile");
  console.log(tile);
  if (Number(tile.id) < 10) {
    if (pos == "vertical") {
      tile.addEventListener("mouseenter", () => {
        tile.classList.add("hover");
        for (let k = 0; k < size; k++) {
          let next = document.getElementById(`0${Number(tile.id) + k}`);
          next.classList.add("hover");
        }
      });
      tile.addEventListener("mouseleave", () => {
        tile.classList.remove("hover");
        for (let k = 0; k < size; k++) {
          let next = document.getElementById(`0${Number(tile.id) + k}`);
          next.classList.remove("hover");
        }
      });
      //preview ships horizontally
    } else if (pos == "horizontal") {
      tile.addEventListener("mouseover", () => {
        tile.classList.add("hover");
        for (let k = 0; k < size; k++) {
          let next = document.getElementById(`${Number(tile.id) + k * 10}`);
          next.classList.add("hover");
        }
      });
      tile.addEventListener("mouseleave", () => {
        tile.classList.remove("hover");
        for (let k = 0; k < size; k++) {
          let next = document.getElementById(`${Number(tile.id) + k * 10}`);
          next.classList.remove("hover");
        }
      });
    }
  } else {
    if (pos == "vertical") {
      tile.addEventListener("mouseenter", () => {
        tile.classList.add("hover");
        for (let k = 0; k < size; k++) {
          let next = document.getElementById(`${Number(tile.id) + k}`);
          next.classList.add("hover");
        }
      });
      tile.addEventListener("mouseleave", () => {
        tile.classList.remove("hover");
        for (let k = 0; k < size; k++) {
          let next = document.getElementById(`${Number(tile.id) + k}`);
          next.classList.remove("hover");
        }
      });
    } else if (pos == "horizontal") {
      tile.addEventListener("mouseover", () => {
        tile.classList.add("hover");
        for (let k = 0; k < size; k++) {
          let next = document.getElementById(`${Number(tile.id) + k * 10}`);
          next.classList.add("hover");
        }
      });
      tile.addEventListener("mouseleave", () => {
        tile.classList.remove("hover");
        for (let k = 0; k < size; k++) {
          let next = document.getElementById(`${Number(tile.id) + k * 10}`);
          next.classList.remove("hover");
        }
      });
    }
  }
};

// preview ship on board
if (player1.myShips.length == 0) {
  preview(5, direction);
} else if (player1.myShips.length == 1) {
  preview(4, direction);
} else if (player1.shipSize.length == 2) {
  preview(3, direction);
} else if (player1.shipSize.length == 3) {
  preview(3, direction);
} else if (player1.shipSize.length == 4) {
  preview(2, direction);
}

makeGrid(10, myGrid);
