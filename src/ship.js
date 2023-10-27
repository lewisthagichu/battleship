const createShip = (shipName, shipLength) => {
  let name = shipName;
  let length = shipLength;
  let timesHit = 0;
  let isSunk = false;
  let isFound = false;

  const getName = () => name;
  const getLength = () => length;
  const getFound = () => isFound;
  const getTimesHit = () => timesHit;
  const getSunk = () => isSunk;

  const found = () => {
    isFound = true;
  };

  const hit = () => {
    timesHit += 1;
    if (timesHit === length) sunk();
  };

  const sunk = () => {
    isSunk = true;
  };

  const resetFound = () => {
    isFound = false;
  };

  return {
    getName,
    getLength,
    getFound,
    getTimesHit,
    getSunk,
    hit,
    sunk,
    found,
    resetFound,
  };
};

export default createShip;
