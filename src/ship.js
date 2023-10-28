const Ship = (name, length) => {
  const shipName = name;
  const shipLength = length;
  const hits = Array(length).fill(false);
  console.log(hits);

  const hit = () => {
    const indexOfFalse = hits.findIndex((item) => item === false);
    if (indexOfFalse !== -1) {
      hits[indexOfFalse] = true;
    }
  };

  const isSunk = () => {
    return hits.every((hit) => hit);
  };

  return { shipName, shipLength, hits, hit, isSunk };
};

const ship = Ship('cruiser', 3);

console.log(ship);

// export default Ship;
