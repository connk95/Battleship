import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";

const content = document.getElementById("content");
const myGrid = document.getElementById("myGrid");
const aiGrid = document.getElementById("aiGrid");
const previewBox = document.getElementById("preview");

const player1 = new Player(true, true);
const ai1 = new Player(false, false);

//change placement axis
const axisButton = document.getElementById("direction");
let direction = "vertical";
axisButton.addEventListener("click", () => {
  if (direction == "vertical") {
    direction = "horizontal";
    previewBox.style.flexDirection = "row";
  } else if (direction == "horizontal") {
    direction = "vertical";
    previewBox.style.flexDirection = "column";
  }
});

//preview ship size before placement
const preview = () => {
  if (player1.myShips.length == 0) {
    let previewTile = document.createElement("div");
    previewTile.classList.add("previewTile");
    previewBox.appendChild(previewTile);
    for (let i = 0; i < 4; i++) {
      let previewDisplay = document.createElement("div");
      previewDisplay.classList.add("previewDisplay");
      previewBox.appendChild(previewDisplay);
    }
  } else if (player1.myShips.length == 1) {
    let previewTile = document.createElement("div");
    previewTile.classList.add("previewTile");
    previewBox.appendChild(previewTile);
    for (let i = 0; i < 3; i++) {
      let previewDisplay = document.createElement("div");
      previewDisplay.classList.add("previewDisplay");
      previewBox.appendChild(previewDisplay);
    }
  } else if (player1.myShips.length == 2) {
    let previewTile = document.createElement("div");
    previewTile.classList.add("previewTile");
    previewBox.appendChild(previewTile);
    for (let i = 0; i < 2; i++) {
      let previewDisplay = document.createElement("div");
      previewDisplay.classList.add("previewDisplay");
      previewBox.appendChild(previewDisplay);
    }
  } else if (player1.myShips.length == 3) {
    let previewTile = document.createElement("div");
    previewTile.classList.add("previewTile");
    previewBox.appendChild(previewTile);
    for (let i = 0; i < 2; i++) {
      let previewDisplay = document.createElement("div");
      previewDisplay.classList.add("previewDisplay");
      previewBox.appendChild(previewDisplay);
    }
  } else if (player1.myShips.length == 4) {
    let previewTile = document.createElement("div");
    previewTile.classList.add("previewTile");
    previewBox.appendChild(previewTile);
    for (let i = 0; i < 1; i++) {
      let previewDisplay = document.createElement("div");
      previewDisplay.classList.add("previewDisplay");
      previewBox.appendChild(previewDisplay);
    }
  } else {
    while (previewBox.firstChild) {
      previewBox.removeChild(previewBox.firstChild);
    }
  }
};

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
      tile.addEventListener("mouseenter", () => {
        tile.classList.add("hover");
      });
      tile.addEventListener("mouseleave", () => {
        tile.classList.remove("hover");
      });

      //place ship

      tile.addEventListener("click", () => {
        const xPosString = String(tile.id)[0];
        const x = Number(xPosString);
        const yPosString = String(tile.id).slice(-1);
        const y = Number(yPosString);
        if (player1.myShips.length < 5) {
          //place all ships from longest to shortest
          if (player1.myShips.length == 0) {
            player1.place("carrier", 5, x, y, direction);
            if (direction == "vertical" && y < 6) {
              tile.classList.add("placed");
              for (let k = 0; k < 5; k++) {
                document.getElementById(`${x}${y + k}`).classList.add("placed");
              }
            } else if (direction == "horizontal" && x < 6) {
              tile.classList.add("placed");
              for (let k = 0; k < 5; k++) {
                document.getElementById(`${x + k}${y}`).classList.add("placed");
              }
            }
          } else if (player1.myShips.length == 1) {
            player1.place("battleship", 4, x, y, direction);
            if (direction == "vertical" && y < 7) {
              tile.classList.add("placed");
              for (let k = 0; k < 4; k++) {
                document.getElementById(`${x}${y + k}`).classList.add("placed");
              }
            } else if (direction == "horizontal" && x < 7) {
              tile.classList.add("placed");
              for (let k = 0; k < 4; k++) {
                document.getElementById(`${x + k}${y}`).classList.add("placed");
              }
            }
          } else if (player1.myShips.length == 2) {
            player1.place("destroyer", 3, x, y, direction);
            if (direction == "vertical" && y < 8) {
              tile.classList.add("placed");
              for (let k = 0; k < 3; k++) {
                document.getElementById(`${x}${y + k}`).classList.add("placed");
              }
            } else if (direction == "horizontal" && x < 8) {
              tile.classList.add("placed");
              for (let k = 0; k < 3; k++) {
                document.getElementById(`${x + k}${y}`).classList.add("placed");
              }
            }
          } else if (player1.myShips.length == 3) {
            player1.place("submarine", 3, x, y, direction);
            if (direction == "vertical" && y < 8) {
              tile.classList.add("placed");
              for (let k = 0; k < 3; k++) {
                document.getElementById(`${x}${y + k}`).classList.add("placed");
              }
            } else if (direction == "horizontal" && x < 8) {
              tile.classList.add("placed");
              for (let k = 0; k < 3; k++) {
                document.getElementById(`${x + k}${y}`).classList.add("placed");
              }
            }
          } else if (player1.myShips.length == 4) {
            player1.place("cruiser", 2, x, y, direction);
            if (direction == "vertical" && y < 9) {
              tile.classList.add("placed");
              for (let k = 0; k < 2; k++) {
                document.getElementById(`${x}${y + k}`).classList.add("placed");
              }
            } else if (direction == "horizontal" && x < 9) {
              tile.classList.add("placed");
              for (let k = 0; k < 2; k++) {
                document.getElementById(`${x + k}${y}`).classList.add("placed");
              }
            }
          } else {
            alert("You have no ships remaining!");
          }
          while (previewBox.firstChild) {
            previewBox.removeChild(previewBox.firstChild);
          }
          preview();
          console.log(player1.myShips);
        } else if (player1.myShips.length == 5) {
          if (ai1.myShips.length == 0) {
            ai1.aiPlace("carrier", 5);
            ai1.aiPlace("battleship", 4);
            ai1.aiPlace("destroyer", 4);
            ai1.aiPlace("submarine", 4);
            ai1.aiPlace("cruiser", 2);
            console.log(ai1.myShips);
          }
          let marker = player1.shoot(x, y, ai1);
          if (marker == false) {
            tile.classList.add("shot");
          } else {
            tile.classList.add("hit");
          }
        }
      });
      column.appendChild(tile);
    }
  }
};

makeGrid(10, myGrid);
preview();
makeGrid(10, aiGrid);

//FOR FUTURE VERSION
//preview ship length
// //const preview = (size) => {
// const tileCollection = document.querySelectorAll(".tile");
// for (let l = 0; l < tileCollection.length; l++) {
//   let tile = tileCollection[l];
//   let shipLength = 0;
//   if (player1.myShips.length == 0) {
//     shipLength = 5;
//   } else if (player1.myShips.length == 1) {
//     shipLength = 4;
//   } else if (player1.myShips.length == 2) {
//     shipLength = 3;
//   } else if (player1.myShips.length == 3) {
//     shipLength = 3;
//   } else if (player1.myShips.length == 4) {
//     shipLength = 2;
//   } else if (player1.myShips.length == 5) {
//     shipLength = 0;
//   }
//   if (Number(tile.id) < 10) {
//     if (direction == "vertical") {
//       console.log("test vert");
//       tile.addEventListener("mouseenter", () => {
//         tile.classList.add("hover");
//         for (let k = 0; k < shipLength; k++) {
//           let next = document.getElementById(`0${Number(tile.id) + k}`);
//           next.classList.add("hover");
//         }
//       });
//       tile.addEventListener("mouseleave", () => {
//         tile.classList.remove("hover");
//         for (let k = 0; k < shipLength; k++) {
//           let next = document.getElementById(`0${Number(tile.id) + k}`);
//           next.classList.remove("hover");
//         }
//       });
//       //preview ships horizontally
//     } else if (direction == "horizontal") {
//       console.log("test horiz");
//       tile.addEventListener("mouseover", () => {
//         tile.classList.add("hover");
//         for (let k = 0; k < shipLength; k++) {
//           let next = document.getElementById(`${Number(tile.id) + k * 10}`);
//           next.classList.add("hover");
//         }
//       });
//       tile.addEventListener("mouseleave", () => {
//         tile.classList.remove("hover");
//         for (let k = 0; k < shipLength; k++) {
//           let next = document.getElementById(`${Number(tile.id) + k * 10}`);
//           next.classList.remove("hover");
//         }
//       });
//     }
//   } else {
//     if (direction == "vertical") {
//       tile.addEventListener("mouseenter", () => {
//         tile.classList.add("hover");
//         for (let k = 0; k < shipLength; k++) {
//           let next = document.getElementById(`${Number(tile.id) + k}`);
//           next.classList.add("hover");
//         }
//       });
//       tile.addEventListener("mouseleave", () => {
//         tile.classList.remove("hover");
//         for (let k = 0; k < shipLength; k++) {
//           let next = document.getElementById(`${Number(tile.id) + k}`);
//           next.classList.remove("hover");
//         }
//       });
//     } else if (direction == "horizontal") {
//       tile.addEventListener("mouseover", () => {
//         tile.classList.add("hover");
//         for (let k = 0; k < shipLength; k++) {
//           let next = document.getElementById(`${Number(tile.id) + k * 10}`);
//           next.classList.add("hover");
//         }
//       });
//       tile.addEventListener("mouseleave", () => {
//         tile.classList.remove("hover");
//         for (let k = 0; k < shipLength; k++) {
//           let next = document.getElementById(`${Number(tile.id) + k * 10}`);
//           next.classList.remove("hover");
//         }
//       });
//     }
//   }
// }
//};

//preview(5, "vertical");
