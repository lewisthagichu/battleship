import createPlayer from '../src/player';

describe('attackEnemy', () => {
  test('should attack randomly if attackedCoordinates is empty', () => {
    const player = createPlayer();
    const enemyGameboard = {
      board: Array(10)
        .fill(null)
        .map(() => Array(10).fill(null)),
      receiveAttack: jest.fn(),
    };

    player.attackEnemy(enemyGameboard);

    expect(enemyGameboard.receiveAttack).toHaveBeenCalledTimes(1);
  });

  test('should attack randomly if the last hit was a miss', () => {
    const player = createPlayer();
    const enemyGameboard = {
      board: Array(10)
        .fill(null)
        .map(() => Array(10).fill(null)),
      receiveAttack: jest.fn(),
    };

    player.attackEnemy(enemyGameboard);
    enemyGameboard.board[1][1] = null; // Simulate a miss at coordinate (1, 1)
    player.attackEnemy(enemyGameboard);

    expect(enemyGameboard.receiveAttack).toHaveBeenCalledTimes(2);
  });

  test('should attack adjacent coordinates if the last hit was a ship', () => {
    const player = createPlayer();
    const enemyGameboard = {
      board: Array(10)
        .fill(null)
        .map(() => Array(10).fill(null)),
      receiveAttack: jest.fn(),
    };

    enemyGameboard.board[5][5] = {}; // Simulate a ship at coordinate (5, 5)
    player.attackEnemy(enemyGameboard);

    expect(enemyGameboard.receiveAttack).toHaveBeenCalledTimes(1);
    const [x, y] = enemyGameboard.receiveAttack.mock.calls[0];
    expect(x >= 4 && x <= 6).toBeTruthy(); // Check if x is within adjacent range
    expect(y >= 4 && y <= 6).toBeTruthy(); // Check if y is within adjacent range
  });

  test('should not attack the same coordinate twice', () => {
    const player = createPlayer();
    const enemyGameboard = {
      board: Array(10)
        .fill(null)
        .map(() => Array(10).fill(null)),
      receiveAttack: jest.fn(),
    };

    player.attackEnemy(enemyGameboard);
    player.attackEnemy(enemyGameboard);

    const [x1, y1] = enemyGameboard.receiveAttack.mock.calls[0];
    const [x2, y2] = enemyGameboard.receiveAttack.mock.calls[1];
    expect(x1 !== x2 || y1 !== y2).toBeTruthy();
  });
});
