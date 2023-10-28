import Ship from './ship';
const createGameboard = () => {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
  const ships = [];
  const missedAttacks = [];

  const placeShip = (shipName, x, y, isHorizontal) => {
    if (isHorizontal) {
      for (let i = 0; i < ship.shipLength; i++) {
        board[x][y + i] = shipName;
      }
    } else {
      for (let i = 0; i < ship.shipLength; i++) {
        board[x + i][y] = shipName;
      }
    }
    ships.push(ship);
  };

  const receiveAttack = (x, y) => {
    if (board[x][y] === null) {
      missedAttacks.push({ x, y });
      return false;
    } else {
      const ship = board[x][y];
      ship.hit();
      return true;
    }
  };

  const allShipsSunk = () => ships.every((ship) => ship.isSunk());

  return {
    board,
    ships,
    missedAttacks,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};

export default createGameboard;

// Example usage:
// const gameboard = createGameboard();
// const battleship = createShip('Battleship', 4);
// gameboard.placeShip(battleship, 2, 3, true);
// console.log(gameboard.receiveAttack(2, 3));
