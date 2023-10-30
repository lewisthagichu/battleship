import createGameboard from './gameboard';
import createPlayer from './player';
import Ship from './ship';

// Example usage:
const playerShip = Ship('cruiser', 3);
const computerShip = Ship('battleship', 4);
console.log(playerShip);

const playerGameboard = createGameboard();
const compGameboard = createGameboard();
playerGameboard.placeShip(playerShip, 4, 5, true);
compGameboard.placeShip(computerShip, 4, 5, true);

const compPlayer = createPlayer();
const player1 = createPlayer();

const result = compPlayer.attackEnemy(playerGameboard);
console.log(result); // Logs the attack coordinate and whether it's a hit or miss
