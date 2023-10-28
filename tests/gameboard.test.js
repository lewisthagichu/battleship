import Ship from '../src/ship';
import createGameboard from '../src/gameboard';

test('Gameboard initializes with correct board state', () => {
  const gameboard = createGameboard();
  expect(gameboard.board.length).toBe(10);
  expect(gameboard.board[0].length).toBe(10);
  expect(gameboard.ships).toEqual([]);
  expect(gameboard.missedAttacks).toEqual([]);
});

test('PlaceShip correctly places horizontal ship on the board', () => {
  const gameboard = createGameboard();
  const ship = { shipLength: 3, hit: jest.fn() };
  gameboard.placeShip(ship, 2, 3, true);
  expect(gameboard.board[2][3]).toBe(ship);
  expect(gameboard.board[2][4]).toBe(ship);
  expect(gameboard.board[2][5]).toBe(ship);
});

test('PlaceShip correctly places vertical ship on the board', () => {
  const gameboard = createGameboard();
  const ship = { shipLength: 4, hit: jest.fn() };
  gameboard.placeShip(ship, 4, 5, false);
  expect(gameboard.board[4][5]).toBe(ship);
  expect(gameboard.board[5][5]).toBe(ship);
  expect(gameboard.board[6][5]).toBe(ship);
  expect(gameboard.board[7][5]).toBe(ship);
});

test('ReceiveAttack returns false for a missed attack', () => {
  const gameboard = createGameboard();
  const result = gameboard.receiveAttack(0, 0);
  expect(result).toBe(false);
  expect(gameboard.missedAttacks).toEqual([{ x: 0, y: 0 }]);
});

test('ReceiveAttack returns true for a hit attack and calls ship.hit()', () => {
  const gameboard = createGameboard();
  const ship = { hit: jest.fn() };
  gameboard.placeShip(ship, 3, 4, true);
  const result = gameboard.receiveAttack(3, 4);
  expect(result).toBe(true);
  expect(gameboard.missedAttacks).toEqual([]);
  expect(ship.hit).toHaveBeenCalled();
});

test('AllShipsSunk returns true when all ships are sunk', () => {
  const gameboard = createGameboard();
  const ship1 = { isSunk: () => true };
  const ship2 = { isSunk: () => true };
  gameboard.ships.push(ship1, ship2);
  expect(gameboard.allShipsSunk()).toBe(true);
});

test('AllShipsSunk returns false when not all ships are sunk', () => {
  const gameboard = createGameboard();
  const ship1 = { isSunk: () => true };
  const ship2 = { isSunk: () => false };
  gameboard.ships.push(ship1, ship2);
  expect(gameboard.allShipsSunk()).toBe(false);
});
