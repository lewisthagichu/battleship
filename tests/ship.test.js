import createShip from '../src/ship';

test('times hit 1', () => {
  const battleship = createShip('submarine', 3);
  battleship.hit();
  expect(battleship.getTimesHit()).toBe(1);
});

test('times hit 3', () => {
  const battleship = createShip('submarine', 3);
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.getTimesHit()).toBe(3);
});

test('is sunk - sunk', () => {
  const battleship = createShip('submarine', 3);
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.getSunk()).toBeTruthy();
});

test('is sunk - not sunk', () => {
  const battleship = createShip('battleship', 4);
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.getSunk()).not.toBeTruthy();
});
