import createGame from './game';

const renderGameboards = (player1Gameboard, player2Gameboard) => {
  const player1Board = document.querySelector('.player-board .board');
  const player2Board = document.querySelector('.enemy-board .board');

  // Clear existing gameboard UI
  player1Board.innerHTML = '';
  player2Board.innerHTML = '';

  // Render player 1's gameboard
  player1Gameboard.board.forEach((row, rowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell', cell ? 'ship' : 'empty');
      rowElement.appendChild(cellElement);
    });
    player1Board.appendChild(rowElement);
  });

  // Render player 2's gameboard
  player2Gameboard.board.forEach((row, rowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell', cell ? 'hit' : 'miss');
      rowElement.appendChild(cellElement);
    });
    player2Board.appendChild(rowElement);
  });
};

const handleAttackClick = (event) => {
  // Extract x and y coordinates from the click event
  const x = parseInt(event.target.getAttribute('data-x'), 10);
  const y = parseInt(event.target.getAttribute('data-y'), 10);

  // Call the playTurn function from the Game module with extracted coordinates
  createGame.playTurn(x, y);
};

// Attach handleAttackClick function to the click event of enemy gameboard cells
const enemyGameboardCells = document.querySelectorAll('.enemy-cell');
enemyGameboardCells.forEach((cell) => {
  cell.addEventListener('click', handleAttackClick);
});

export default renderGameboards;
