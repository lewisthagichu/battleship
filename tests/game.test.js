import createGame from '../src/game';

describe('Game Logic', () => {
  test('Player 1 wins the game', () => {
    const game = createGame();
    const player1Gameboard = createGameboard();
    const player2Gameboard = createGameboard();

    // Manually place ships for player 2
    player2Gameboard.placeShip(createShip(5), 0, 0, true);
    player2Gameboard.placeShip(createShip(4), 1, 1, false);

    // Player 1 attacks player 2's ships and sinks them
    game.playTurn(0, 0);
    game.playTurn(0, 1);
    game.playTurn(0, 2);
    game.playTurn(0, 3);
    game.playTurn(0, 4);

    // Player 1 wins because all of player 2's ships are sunk
    expect(player2Gameboard.allShipsSunk()).toBe(true);
  });

  test('Computer wins the game', () => {
    const game = createGame();
    const player1Gameboard = createGameboard();
    const player2Gameboard = createGameboard();

    // Manually place ships for player 1
    player1Gameboard.placeShip(createShip(5), 0, 0, true);
    player1Gameboard.placeShip(createShip(4), 1, 1, false);

    // Player 2 (Computer) attacks player 1's ships and sinks them
    game.playTurn(0, 0);
    game.playTurn(1, 1);
    game.playTurn(2, 1);
    game.playTurn(3, 1);
    game.playTurn(4, 1);

    // Computer wins because all of player 1's ships are sunk
    expect(player1Gameboard.allShipsSunk()).toBe(true);
  });
});
