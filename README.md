# Battleship

Welcome to the Battleship Game project! This project brings the classic game of Battleship to life in a digital format. It's a single-player game where the player can strategically places their fleet of ships on a grid and attempts to sink their opponent's ships by making precise guesses.

## Table of Contents

- [Features](https://github.com/connk95/Battleship/blob/main/README.md#features)
- [Demo](https://github.com/connk95/Battleship/blob/main/README.md#features)
- [Installation](https://github.com/connk95/Battleship/blob/main/README.md#installation)
- [Code Description](https://github.com/connk95/Battleship/blob/main/README.md#code-description)
- [Usage](https://github.com/connk95/Battleship/blob/main/README.md#usage)
- [Contributing](https://github.com/connk95/Battleship/blob/main/README.md#contributing)
- [License](https://github.com/connk95/Battleship/blob/main/README.md#license)
- [Acknowledgements](https://github.com/connk95/Battleship/blob/main/README.md#acknowledgements)

## Features

- Single-Player Gameplay: Play against an AI, taking turns to guess each other's ship placements.
- Ship Placement: Strategically place your fleet of ships on the grid before the game begins.
- Guessing: Take turns making educated guesses to locate and sink your opponent's ships.
- Visual Feedback: Receive visual cues on the grid to indicate hits, misses, and sunken ships.
- Winning Condition: The player who sinks all of their opponent's ships first wins the game.

## Demo

https://connk95.github.io/Battleship/

## Installation

1. Clone this repository using the following command:
   ```
   git clone https://github.com/connk95/Battleship.git
   ```

2. Navigate to the project directory:
   ```
   cd Battleship
   ```
   
3. Navigate to the dist directory:
   ```
   cd dist
   ```

4. Run the app and view in your browser:
   ```
   open index.html
   ```

## Code Description

[Index.js](https://github.com/connk95/Battleship/blob/main/src/index.js) - Contains constants for player 1 and ai. Contains functions for previewing ship placement, placing ships for player and ai, creating the gameboard, attacking, and feedback from attacks.

[Gameboard.js](https://github.com/connk95/Battleship/blob/main/src/gameboard.js) - Contains a Gameboard class which stores the board, made shots, hits, and placed ships for each player. Contains functions for creating the board, placing ships, and receiving attacks.

[Player.js](https://github.com/connk95/Battleship/blob/main/src/player.js) - Contains a Player class which stores each player's board, placed ships, shots, hits, and a shot search for the ai. Contains functions for placing a ship and shooting for both the player and ai, and a function which helps the ai to search for the player's ships.

[Ship.js](https://github.com/connk95/Battleship/blob/main/src/ship.js) - Contains a Ship class which stores each ship's details, location, and status. Contains functions for receiving hits and being sunk.

[Style.css](https://github.com/connk95/Battleship/blob/main/src/style.css) - CSS for the entire project.

## Usage

1. Click "Start Game" to begin.
2. Place your ships on your board. You can change the axis of the ship by clicking the "Axis" button.
3. The game will begin automatically when all of your ships have been placed.
4. Shoot at the enemy board. Missed shots will be marked as white, and hits will be marked as red.
5. When all ships have been sunk, the game will end.

## Contributing

Contributions to this project are welcome! If you find any bugs or have ideas for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was created by Connor Ketcheson.

If you have any questions or feedback, please don't hesitate to contact us.

---
