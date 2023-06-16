import { Player } from "./player";

const myGrid = document.getElementById("myGrid");
const myTiles = document.getElementsByClassName("myTile");
const aiGrid = document.getElementById("aiGrid");
const aiTiles = document.getElementsByClassName("aiTile");
aiGrid.style.visibility = "hidden";
const previewBox = document.getElementById("preview");
const shipPreview = document.getElementById("shipPreview");

const player1 = new Player(true, true);
const ai1 = new Player(false, false);
let myTurn = true;

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

const aiPlace = () => {
  while (ai1.myShips.length < 5) {
    if (ai1.myShips.length == 0) {
      ai1.aiPlace("carrier", 5);
    } else if (ai1.myShips.length == 1) {
      ai1.aiPlace("battleship", 4);
    } else if (ai1.myShips.length == 2) {
      ai1.aiPlace("destroyer", 4);
    } else if (ai1.myShips.length == 3) {
      ai1.aiPlace("submarine", 4);
    } else if (ai1.myShips.length == 4) {
      ai1.aiPlace("cruiser", 2);
    } else {
      break;
    }
  }
};

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

const makeGrid = (size, parent, human) => {
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
      if (human == true) {
        tile.classList.add("myTile");
      } else if (human == false) {
        tile.classList.add("aiTile");
      }
      tile.addEventListener("mouseenter", () => {
        tile.classList.add("hover");
      });
      tile.addEventListener("mouseleave", () => {
        tile.classList.remove("hover");
      });
      column.appendChild(tile);
    }
  }
};

const placeShip = () => {
  for (let i = 0; i < myTiles.length; i++) {
    //place ship
    myTiles[i].addEventListener("click", () => {
      const xPosString = String(myTiles[i].id)[0];
      const x = Number(xPosString);
      const yPosString = String(myTiles[i].id).slice(-1);
      const y = Number(yPosString);
      if (player1.myShips.length < 5) {
        //place all ships from longest to shortest
        if (player1.myShips.length == 0) {
          player1.place("carrier", 5, x, y, direction);
          if (direction == "vertical" && y < 6) {
            myTiles[i].classList.add("placed");
            for (let k = 0; k < 5; k++) {
              document.getElementById(`${x}${y + k}`).classList.add("placed");
            }
          } else if (direction == "horizontal" && x < 6) {
            myTiles[i].classList.add("placed");
            for (let k = 0; k < 5; k++) {
              document.getElementById(`${x + k}${y}`).classList.add("placed");
            }
          }
        } else if (player1.myShips.length == 1) {
          player1.place("battleship", 4, x, y, direction);
          if (direction == "vertical" && y < 7) {
            myTiles[i].classList.add("placed");
            for (let k = 0; k < 4; k++) {
              document.getElementById(`${x}${y + k}`).classList.add("placed");
            }
          } else if (direction == "horizontal" && x < 7) {
            myTiles[i].classList.add("placed");
            for (let k = 0; k < 4; k++) {
              document.getElementById(`${x + k}${y}`).classList.add("placed");
            }
          }
        } else if (player1.myShips.length == 2) {
          player1.place("destroyer", 3, x, y, direction);
          if (direction == "vertical" && y < 8) {
            myTiles[i].classList.add("placed");
            for (let k = 0; k < 3; k++) {
              document.getElementById(`${x}${y + k}`).classList.add("placed");
            }
          } else if (direction == "horizontal" && x < 8) {
            myTiles[i].classList.add("placed");
            for (let k = 0; k < 3; k++) {
              document.getElementById(`${x + k}${y}`).classList.add("placed");
            }
          }
        } else if (player1.myShips.length == 3) {
          player1.place("submarine", 3, x, y, direction);
          if (direction == "vertical" && y < 8) {
            myTiles[i].classList.add("placed");
            for (let k = 0; k < 3; k++) {
              document.getElementById(`${x}${y + k}`).classList.add("placed");
            }
          } else if (direction == "horizontal" && x < 8) {
            myTiles[i].classList.add("placed");
            for (let k = 0; k < 3; k++) {
              document.getElementById(`${x + k}${y}`).classList.add("placed");
            }
          }
        } else if (player1.myShips.length == 4) {
          player1.place("cruiser", 2, x, y, direction);
          if (direction == "vertical" && y < 9) {
            myTiles[i].classList.add("placed");
            for (let k = 0; k < 2; k++) {
              document.getElementById(`${x}${y + k}`).classList.add("placed");
            }
          } else if (direction == "horizontal" && x < 9) {
            myTiles[i].classList.add("placed");
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
      }
      if (player1.myShips.length == 5) {
        shipPreview.style.visibility = "hidden";
        aiPlace();
        aiGrid.style.visibility = "visible";
        attackTile();
      }
    });
  }
};

const aiAttack = () => {
  if (myTurn == true) {
    return;
  } else if (myTurn == false) {
    let aiAttackTile = ai1.aiShoot(player1);
    console.log(aiAttackTile);
    let x = aiAttackTile[0];
    let y = aiAttackTile[1];
    for (let i = 0; i < myTiles.length; i++) {
      let xPosString = String(myTiles[i].id)[0];
      let myX = Number(xPosString);
      let yPosString = String(myTiles[i].id).slice(-1);
      let myY = Number(yPosString);
      if (aiAttackTile[2] == true && x == myX && y == myY) {
        myTiles[i].classList.add("hit");
        //checkWin();
      } else if (aiAttackTile[2] == false && x == myX && y == myY) {
        myTiles[i].classList.add("shot");
      }
    }
    checkWin(player1);
    myTurn = true;
  }
};

const attackTile = () => {
  for (let i = 0; i < aiTiles.length; i++) {
    aiTiles[i].addEventListener("click", () => {
      if (myTurn == false) {
        alert("It's not your turn!");
        return;
      } else if (myTurn == true) {
        let xPosString = String(aiTiles[i].id)[0];
        let x = Number(xPosString);
        let yPosString = String(aiTiles[i].id).slice(-1);
        let y = Number(yPosString);
        let marker = player1.shoot(x, y, ai1);
        if (marker == true) {
          aiTiles[i].classList.add("hit");
          //checkWin();
        } else {
          aiTiles[i].classList.add("shot");
        }
        myTurn = false;
        let win = checkWin(ai1);
        if (win == false) {
          setTimeout(aiAttack, 1000);
        }
      }
    });
  }
};

const checkWin = (player) => {
  if (player.myBoard.hits.length == 17) {
    if (player.isHuman == false) {
      alert("You win!");
    } else if (player.isHuman == true) {
      alert("You lose!");
    }
    while (myGrid.firstChild) {
      aiGrid.removeChild(aiGrid.firstChild);
      myGrid.removeChild(myGrid.firstChild);
    }
    let playAgain = confirm("Play again?");
    if (playAgain) {
      player1.turn = true;
      player1.myBoard = new Gameboard(10);
      player1.myShips = [];
      player1.shots = [];
      player1.myHits = [];
      player1.shotSearch = [];
      ai1.turn = false;
      ai1.myBoard = new Gameboard(10);
      ai1.myShips = [];
      ai1.shots = [];
      ai1.myHits = [];
      ai1.shotSearch = [];
      makeGrid(10, myGrid, true);
      preview();
      placeShip();
      makeGrid(10, aiGrid, false);
      shipPreview.style.visibility = "visible";
    } else {
      alert("Thank you for playing!");
    }
    return true;
  } else {
    return false;
  }
};

makeGrid(10, myGrid, true);
preview();
placeShip();
makeGrid(10, aiGrid, false);

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
