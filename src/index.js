import { Player } from "./player";
import "./style.css";

const content = document.getElementById("content");
//const myGrid = document.getElementById("myGrid");
const myTiles = document.getElementsByClassName("myTile");
//const aiGrid = document.getElementById("aiGrid");
//aiGrid.style.visibility = "hidden";
//const previewBox = document.getElementById("preview");
//const shipPreview = document.getElementById("shipPreview");
let direction = "vertical";
const player1 = new Player(true, true);
const ai1 = new Player(false, false);
let myTurn = true;

const newPreview = () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  let myUI = document.createElement("div");
  myUI.id = "myUI";
  content.appendChild(myUI);

  let myDisplay = document.createElement("div");
  myDisplay.id = "myDisplay";
  myUI.appendChild(myDisplay);

  let myGrid = document.createElement("div");
  myGrid.id = "myGrid";
  myGrid.classList.add("grid");
  myDisplay.appendChild(myGrid);

  let shipPreview = document.createElement("div");
  shipPreview.id = "shipPreview";
  myDisplay.appendChild(shipPreview);

  let instructions = document.createElement("p");
  instructions.id = "instructions";
  instructions.innerHTML =
    "Place your ships on an available space. You can change the axis by clicking this button.";
  shipPreview.appendChild(instructions);

  let directionButton = document.createElement("button");
  directionButton.id = "direction";
  directionButton.innerHTML = "Axis";
  let direction = "vertical";

  directionButton.addEventListener("click", () => {
    if (direction == "vertical") {
      direction = "horizontal";
      previewBox.style.flexDirection = "row";
    } else if (direction == "horizontal") {
      direction = "vertical";
      previewBox.style.flexDirection = "column";
    }
    return direction;
  });
  let previewBox = document.createElement("div");
  previewBox.id = "preview";
  shipPreview.appendChild(directionButton);
  shipPreview.appendChild(previewBox);
};

const gameStart = () => {
  let shipPreview = document.getElementById("shipPreview");
  while (shipPreview.firstChild) {
    shipPreview.removeChild(shipPreview.firstChild);
  }
  let aiUI = document.createElement("div");
  aiUI.id = "aiUI";
  content.appendChild(aiUI);

  let aiGrid = document.createElement("div");
  aiGrid.id = "aiGrid";
  aiGrid.classList.add("grid");
  aiUI.appendChild(aiGrid);
};

//change placement axis
//const axisButton = document.getElementById("direction");
//const previewBox = document.getElementById("preview");
// axisButton.addEventListener("click", () => {
//   if (direction == "vertical") {
//     direction = "horizontal";
//     previewBox.style.flexDirection = "row";
//   } else if (direction == "horizontal") {
//     direction = "vertical";
//     previewBox.style.flexDirection = "column";
//   }
// });

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
  let previewBox = document.getElementById("preview");
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
    while (previewBox.firstChild) {
      previewBox.removeChild(previewBox.firstChild);
    }
    let previewTile = document.createElement("div");
    previewTile.classList.add("previewTile");
    previewBox.appendChild(previewTile);
    for (let i = 0; i < 3; i++) {
      let previewDisplay = document.createElement("div");
      previewDisplay.classList.add("previewDisplay");
      previewBox.appendChild(previewDisplay);
    }
  } else if (player1.myShips.length == 2) {
    while (previewBox.firstChild) {
      previewBox.removeChild(previewBox.firstChild);
    }
    let previewTile = document.createElement("div");
    previewTile.classList.add("previewTile");
    previewBox.appendChild(previewTile);
    for (let i = 0; i < 2; i++) {
      let previewDisplay = document.createElement("div");
      previewDisplay.classList.add("previewDisplay");
      previewBox.appendChild(previewDisplay);
    }
  } else if (player1.myShips.length == 3) {
    while (previewBox.firstChild) {
      previewBox.removeChild(previewBox.firstChild);
    }
    let previewTile = document.createElement("div");
    previewTile.classList.add("previewTile");
    previewBox.appendChild(previewTile);
    for (let i = 0; i < 2; i++) {
      let previewDisplay = document.createElement("div");
      previewDisplay.classList.add("previewDisplay");
      previewBox.appendChild(previewDisplay);
    }
  } else if (player1.myShips.length == 4) {
    while (previewBox.firstChild) {
      previewBox.removeChild(previewBox.firstChild);
    }
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
  let previewBox = document.getElementById("preview");
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
        //shipPreview.style.visibility = "hidden";
        gameStart();
        makeGrid(10, aiGrid, false);
        aiPlace();
        //aiGrid.style.visibility = "visible";
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
    let x = aiAttackTile[0];
    let y = aiAttackTile[1];
    for (let i = 0; i < myTiles.length; i++) {
      let xPosString = String(myTiles[i].id)[0];
      let myX = Number(xPosString);
      let yPosString = String(myTiles[i].id).slice(-1);
      let myY = Number(yPosString);
      if (aiAttackTile[2] == true && x == myX && y == myY) {
        myTiles[i].classList.add("hit");
        notification("We've taken a hit!");
      } else if (aiAttackTile[2] == false && x == myX && y == myY) {
        myTiles[i].classList.add("shot");
        notification("The enemy has missed!");
      }
    }
    checkWin(player1);
    myTurn = true;
  }
};

export const notification = (message) => {
  let shipPreview = document.getElementById("shipPreview");
  shipPreview.style.justifyContent = "center";
  let newMessage = document.createElement("p");
  newMessage.innerHTML = message;
  shipPreview.appendChild(newMessage);
  setTimeout(function () {
    newMessage.remove();
  }, 1000);
};

const attackTile = () => {
  const aiTiles = document.getElementsByClassName("aiTile");
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
          //typeWriter("Enemy hit!");
          notification("Enemy hit!");
        } else {
          aiTiles[i].classList.add("shot");
          //typeWriter("You missed!");
          notification("Miss!");
        }
        myTurn = false;
        let win = checkWin(ai1);
        if (win == false) {
          setTimeout(aiAttack, 1500);
        }
      }
    });
  }
};

const checkWin = (player) => {
  let aiGrid = document.getElementById("aiGrid");
  let myGrid = document.getElementById("myGrid");
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

const loadTitle = () => {
  let titleScreen = document.createElement("div");
  titleScreen.id = "titleScreen";
  content.appendChild(titleScreen);

  let title = document.createElement("h1");
  title.innerHTML = "BATTLESHIP";
  titleScreen.appendChild(title);

  let startButton = document.createElement("button");
  startButton.innerHTML = "Start Game";
  titleScreen.appendChild(startButton);
  startButton.addEventListener("click", () => {
    newPreview();
    makeGrid(10, myGrid, true);
    preview();
    placeShip();
  });
};

loadTitle();

// makeGrid(10, myGrid, true);
// preview();
// placeShip();

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
