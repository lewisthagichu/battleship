import createGameboard from './gameboard';
import createPlayer from './player';
import Ship from './ship';
import renderGameboards from './dom';
import createGame from './game';

// Set up game elements and start the game
const player1Gameboard = createGameboard();
const player2Gameboard = createGameboard();

// Render initial gameboards
renderGameboards(player1Gameboard, player2Gameboard);

createGame();
