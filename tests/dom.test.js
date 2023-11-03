import { JSDOM } from 'jsdom';
import renderGameboards from '../src/dom';

// Mock the DOM environment
const dom = new JSDOM(`
  <div class="player-board">
    <div class="board"></div>
  </div>
  <div class="enemy-board">
    <div class="board"></div>
  </div>
`);

global.document = dom.window.document;

describe('renderGameboards Function', () => {
  let player1Gameboard, player2Gameboard;

  beforeEach(() => {
    // Set up initial gameboard states for testing
    player1Gameboard = {
      board: [
        [0, 1],
        [1, 0],
      ], // Example gameboard with ships
    };
    player2Gameboard = {
      board: [
        [1, 0],
        [0, 0],
      ], // Example gameboard with hits and misses
    };

    // Call the renderGameboards function with the initial gameboard states
    renderGameboards(player1Gameboard, player2Gameboard);
  });

  test('renders player1Gameboard correctly', () => {
    const player1Board = document.querySelector('.player-board .board');
    expect(player1Board.innerHTML).toContain('<div class="cell ship"></div>');
    expect(player1Board.innerHTML).toContain('<div class="cell empty"></div>');
  });

  test('renders player2Gameboard correctly', () => {
    const player2Board = document.querySelector('.enemy-board .board');
    expect(player2Board.innerHTML).toContain('<div class="cell hit"></div>');
    expect(player2Board.innerHTML).toContain('<div class="cell miss"></div>');
  });
});

describe('handleAttackClick Function', () => {
  let mockPlayTurn;
  let enemyGameboardCell;

  beforeEach(() => {
    // Set up mock playTurn function and simulate a click event on an enemy gameboard cell
    mockPlayTurn = jest.fn();
    document.body.innerHTML =
      '<div class="enemy-cell" data-x="1" data-y="2"></div>';
    enemyGameboardCell = document.querySelector('.enemy-cell');
    enemyGameboardCell.addEventListener('click', (event) =>
      handleAttackClick(event)
    );
  });

  test('calls playTurn with correct coordinates', () => {
    enemyGameboardCell.click(); // Simulate a click on the enemy gameboard cell
    expect(mockPlayTurn).toHaveBeenCalledWith(1, 2);
  });
});
