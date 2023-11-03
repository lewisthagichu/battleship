import Ship from './ship';
import createPlayer from './player';
import createGameboard from './gameboard';
import renderGameboards from './dom';

const createGame = () => {
  // Create players and gameboards
  const player1 = createPlayer('Player 1');
  const player2 = createPlayer('Computer');
  const player1Gameboard = createGameboard();
  const player2Gameboard = createGameboard();

  // Randomly place ships on gameboards
  placeShipsRandomly(player1Gameboard);
  placeShipsRandomly(player2Gameboard);

  // Define the playTurn function
  const playTurn = (x, y) => {
    // Player 1's turn
    const player1Result = player2Gameboard.receiveAttack(x, y); // Attack player2Gameboard (Computer)
    if (player2Gameboard.allShipsSunk()) {
      // Player 1 wins if all computer's ships are sunk
      console.log('Player 1 wins!');
      return;
    }

    // Player 2 (Computer) turn
    const computerMove = player1.attackEnemy(player1Gameboard); // Attack player1Gameboard

    if (player1Gameboard.allShipsSunk()) {
      // Computer wins if all player's ships are sunk
      console.log('Computer wins!');
      return;
    }

    // Render the updated gameboards using the DOM interaction module
    renderGameboards(player1Gameboard, player2Gameboard);
  };

  return {
    playTurn,
  };
};

const placeShipsRandomly = (gameboard) => {
  const shipLengths = [5, 4, 3, 3, 2]; // Define the lengths of the ships
  for (const length of shipLengths) {
    let placed = false;
    while (!placed) {
      const isHorizontal = Math.random() < 0.5; // Randomly choose horizontal or vertical placement
      const x = Math.floor(Math.random() * 10); // Random row index
      const y = Math.floor(Math.random() * 10); // Random column index

      if (gameboard.placeShip(Ship(length), x, y, isHorizontal)) {
        // Attempt to place the ship on the gameboard
        placed = true; // Ship placed successfully
      }
    }
  }
};

export default createGame;
