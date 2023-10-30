import Ship from './ship';
const createGameboard = () => {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
  const ships = [];
  const missedAttacks = [];

  const placeShip = (ship, x, y, isHorizontal) => {
    if (isHorizontal) {
      for (let i = 0; i < ship.shipLength; i++) {
        board[x][y + i] = ship;
      }
    } else {
      for (let i = 0; i < ship.shipLength; i++) {
        board[x + i][y] = ship;
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
      console.log(ship);
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
