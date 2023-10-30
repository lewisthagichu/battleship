const createPlayer = () => {
  const attackedCoordinates = [];

  const attackEnemy = (enemyGameboard) => {
    let x, y;
    if (attackedCoordinates.length === 0) {
      x = getRandomCoordinate();
      y = getRandomCoordinate();
    } else {
      const lastHit = attackedCoordinates[attackedCoordinates.length - 1];

      // Check if the last hit was a successful hit
      if (enemyGameboard.board[lastHit.x][lastHit.y] !== null) {
        // Get adjacent coordinates only if the last hit was a ship
        const adjacentCoordinates = getAdjacentCoordinates(lastHit);
        const validAdjacentCoordinates = adjacentCoordinates.filter((coord) =>
          isCoordinateValid(coord, attackedCoordinates)
        );

        if (validAdjacentCoordinates.length > 0) {
          // If there are valid adjacent coordinates, select one of them randomly
          const randomIndex = Math.floor(
            Math.random() * validAdjacentCoordinates.length
          );
          const selectedCoord = validAdjacentCoordinates[randomIndex];
          x = selectedCoord.x;
          y = selectedCoord.y;
        } else {
          // If no valid adjacent coordinates, attack randomly
          x = getRandomCoordinate();
          y = getRandomCoordinate();
        }
      } else {
        // If the last hit was a miss, attack randomly
        x = getRandomCoordinate();
        y = getRandomCoordinate();
      }
    }

    attackedCoordinates.push({ x, y });
    const isHit = enemyGameboard.receiveAttack(x, y);
    return { x, y, isHit };
  };

  const getRandomCoordinate = () => Math.floor(Math.random() * 10);

  const getAdjacentCoordinates = ({ x, y }) => [
    { x: x - 1, y },
    { x: x + 1, y },
    { x, y: y - 1 },
    { x, y: y + 1 },
  ];

  const isCoordinateValid = (coordinate, attackedCoordinates) => {
    return !attackedCoordinates.some(
      (coord) => coord.x === coordinate.x && coord.y === coordinate.y
    );
  };

  return {
    attackEnemy,
  };
};

export default createPlayer;
