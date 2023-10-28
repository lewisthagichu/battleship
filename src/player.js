const createSmartPlayer = () => {
  const attackedCoordinates = [];

  const attackEnemy = (enemyGameboard) => {
    let x, y;
    if (attackedCoordinates.length === 0) {
      x = getRandomCoordinate();
      y = getRandomCoordinate();
    } else {
      const lastHit = attackedCoordinates[attackedCoordinates.length - 1];
      const adjacentCoordinates = getAdjacentCoordinates(lastHit);
      const validAdjacentCoordinates = adjacentCoordinates.filter((coord) =>
        isCoordinateValid(coord, attackedCoordinates)
      );

      if (validAdjacentCoordinates.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * validAdjacentCoordinates.length
        );
        const selectedCoord = validAdjacentCoordinates[randomIndex];
        x = selectedCoord.x;
        y = selectedCoord.y;
      } else {
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

// Example usage:
const smartPlayer = createSmartPlayer();
const enemyGameboard = createGameboard(); // Assume you have a createGameboard function
const result = smartPlayer.attackEnemy(enemyGameboard);
console.log(result); // Logs the attack coordinate and whether it's a hit or miss
