import Ship from '../src/ship';
import createGameboard from '../src/gameboard';

describe('createGameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = createGameboard();
  });

  test('placeShip correctly places ships on the board', () => {
    const ship = Ship('cruiser', 3);
    gameboard.placeShip(ship, 0, 0, true); // Placing ship horizontally at (0, 0)
    expect(gameboard.board[0][0]).toBe(ship);
    expect(gameboard.board[0][1]).toBe(ship);
    expect(gameboard.board[0][2]).toBe(ship);

    gameboard.placeShip(ship, 1, 1, false); // Placing ship vertically at (1, 1)
    expect(gameboard.board[1][1]).toBe(ship);
    expect(gameboard.board[2][1]).toBe(ship);
    expect(gameboard.board[3][1]).toBe(ship);
  });

  test('receiveAttack returns false for missed attacks', () => {
    const result = gameboard.receiveAttack(0, 0);
    expect(result).toBe(false);
    expect(gameboard.missedAttacks).toEqual([{ x: 0, y: 0 }]);
  });

  test('receiveAttack returns true for successful attacks and calls ship.hit()', () => {
    const ship = Ship('test', 1);
    gameboard.placeShip(ship, 0, 0, true);

    const result = gameboard.receiveAttack(0, 0);
    expect(result).toBe(true);
    expect(gameboard.missedAttacks).toEqual([]);
  });

  test('allShipsSunk returns true when all ships are sunk', () => {
    const ship1 = Ship('cruiser', 3);
    const ship2 = Ship('battleship', 4);
    gameboard.placeShip(ship1, 0, 0, true);
    gameboard.placeShip(ship2, 1, 0, true);

    ship1.hit();
    ship1.hit();
    ship1.hit();
    ship2.hit();
    ship2.hit();
    ship2.hit();
    ship2.hit();

    const result = gameboard.allShipsSunk();
    expect(result).toBe(true);
  });

  test('allShipsSunk returns false when not all ships are sunk', () => {
    const ship1 = Ship('cruiser', 3);
    const ship2 = Ship('battleship', 4);
    gameboard.placeShip(ship1, 0, 0, true);
    gameboard.placeShip(ship2, 1, 0, true);

    ship1.hit();
    ship2.hit();
    ship2.hit();

    const result = gameboard.allShipsSunk();
    expect(result).toBe(false);
  });
});
