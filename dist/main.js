/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst renderGameboards = (player1Gameboard, player2Gameboard) => {\n  const player1Board = document.querySelector('.player-board .board');\n  const player2Board = document.querySelector('.enemy-board .board');\n\n  // Clear existing gameboard UI\n  player1Board.innerHTML = '';\n  player2Board.innerHTML = '';\n\n  // Render player 1's gameboard\n  player1Gameboard.board.forEach((row, rowIndex) => {\n    const rowElement = document.createElement('div');\n    rowElement.classList.add('row');\n    row.forEach((cell, colIndex) => {\n      const cellElement = document.createElement('div');\n      cellElement.classList.add('cell', cell ? 'ship' : 'empty');\n      rowElement.appendChild(cellElement);\n    });\n    player1Board.appendChild(rowElement);\n  });\n\n  // Render player 2's gameboard\n  player2Gameboard.board.forEach((row, rowIndex) => {\n    const rowElement = document.createElement('div');\n    rowElement.classList.add('row');\n    row.forEach((cell, colIndex) => {\n      const cellElement = document.createElement('div');\n      cellElement.classList.add('cell', cell ? 'hit' : 'miss');\n      rowElement.appendChild(cellElement);\n    });\n    player2Board.appendChild(rowElement);\n  });\n};\n\nconst handleAttackClick = (event) => {\n  // Extract x and y coordinates from the click event\n  const x = parseInt(event.target.getAttribute('data-x'), 10);\n  const y = parseInt(event.target.getAttribute('data-y'), 10);\n\n  // Call the playTurn function from the Game module with extracted coordinates\n  _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playTurn(x, y);\n};\n\n// Attach handleAttackClick function to the click event of enemy gameboard cells\nconst enemyGameboardCells = document.querySelectorAll('.enemy-cell');\nenemyGameboardCells.forEach((cell) => {\n  cell.addEventListener('click', handleAttackClick);\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGameboards);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDZDQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanM/Y2JmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCByZW5kZXJHYW1lYm9hcmRzID0gKHBsYXllcjFHYW1lYm9hcmQsIHBsYXllcjJHYW1lYm9hcmQpID0+IHtcbiAgY29uc3QgcGxheWVyMUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCAuYm9hcmQnKTtcbiAgY29uc3QgcGxheWVyMkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWJvYXJkIC5ib2FyZCcpO1xuXG4gIC8vIENsZWFyIGV4aXN0aW5nIGdhbWVib2FyZCBVSVxuICBwbGF5ZXIxQm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIHBsYXllcjJCb2FyZC5pbm5lckhUTUwgPSAnJztcblxuICAvLyBSZW5kZXIgcGxheWVyIDEncyBnYW1lYm9hcmRcbiAgcGxheWVyMUdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3Qgcm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvd0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgcm93LmZvckVhY2goKGNlbGwsIGNvbEluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2VsbCcsIGNlbGwgPyAnc2hpcCcgOiAnZW1wdHknKTtcbiAgICAgIHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbEVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dFbGVtZW50KTtcbiAgfSk7XG5cbiAgLy8gUmVuZGVyIHBsYXllciAyJ3MgZ2FtZWJvYXJkXG4gIHBsYXllcjJHYW1lYm9hcmQuYm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2xJbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCBjZWxsID8gJ2hpdCcgOiAnbWlzcycpO1xuICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudCk7XG4gICAgfSk7XG4gICAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd0VsZW1lbnQpO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZUF0dGFja0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gIC8vIEV4dHJhY3QgeCBhbmQgeSBjb29yZGluYXRlcyBmcm9tIHRoZSBjbGljayBldmVudFxuICBjb25zdCB4ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG5cbiAgLy8gQ2FsbCB0aGUgcGxheVR1cm4gZnVuY3Rpb24gZnJvbSB0aGUgR2FtZSBtb2R1bGUgd2l0aCBleHRyYWN0ZWQgY29vcmRpbmF0ZXNcbiAgY3JlYXRlR2FtZS5wbGF5VHVybih4LCB5KTtcbn07XG5cbi8vIEF0dGFjaCBoYW5kbGVBdHRhY2tDbGljayBmdW5jdGlvbiB0byB0aGUgY2xpY2sgZXZlbnQgb2YgZW5lbXkgZ2FtZWJvYXJkIGNlbGxzXG5jb25zdCBlbmVteUdhbWVib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LWNlbGwnKTtcbmVuZW15R2FtZWJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrQ2xpY2spO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVib2FyZHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\nconst createGame = () => {\n  // Create players and gameboards\n  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Player 1');\n  const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Computer');\n  const player1Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const player2Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  // Randomly place ships on gameboards\n  placeShipsRandomly(player1Gameboard);\n  placeShipsRandomly(player2Gameboard);\n\n  // Define the playTurn function\n  const playTurn = (x, y) => {\n    // Player 1's turn\n    const player1Result = player2Gameboard.receiveAttack(x, y); // Attack player2Gameboard (Computer)\n    if (player2Gameboard.allShipsSunk()) {\n      // Player 1 wins if all computer's ships are sunk\n      console.log('Player 1 wins!');\n      return;\n    }\n\n    // Player 2 (Computer) turn\n    const computerMove = player1.attackEnemy(player1Gameboard); // Attack player1Gameboard\n\n    if (player1Gameboard.allShipsSunk()) {\n      // Computer wins if all player's ships are sunk\n      console.log('Computer wins!');\n      return;\n    }\n\n    // Render the updated gameboards using the DOM interaction module\n    (0,_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player1Gameboard, player2Gameboard);\n  };\n\n  return {\n    playTurn,\n  };\n};\n\nconst placeShipsRandomly = (gameboard) => {\n  const shipLengths = [5, 4, 3, 3, 2]; // Define the lengths of the ships\n  for (const length of shipLengths) {\n    let placed = false;\n    while (!placed) {\n      const isHorizontal = Math.random() < 0.5; // Randomly choose horizontal or vertical placement\n      const x = Math.floor(Math.random() * 10); // Random row index\n      const y = Math.floor(Math.random() * 10); // Random column index\n\n      if (gameboard.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length), x, y, isHorizontal)) {\n        // Attempt to place the ship on the gameboard\n        placed = true; // Ship placed successfully\n      }\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGame);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNVO0FBQ007QUFDTDs7QUFFckM7QUFDQTtBQUNBLGtCQUFrQixtREFBWTtBQUM5QixrQkFBa0IsbURBQVk7QUFDOUIsMkJBQTJCLHNEQUFlO0FBQzFDLDJCQUEyQixzREFBZTs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnREFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELGdEQUFnRDtBQUNoRCxnREFBZ0Q7O0FBRWhELDhCQUE4QixpREFBSTtBQUNsQztBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanM/N2RlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCByZW5kZXJHYW1lYm9hcmRzIGZyb20gJy4vZG9tJztcblxuY29uc3QgY3JlYXRlR2FtZSA9ICgpID0+IHtcbiAgLy8gQ3JlYXRlIHBsYXllcnMgYW5kIGdhbWVib2FyZHNcbiAgY29uc3QgcGxheWVyMSA9IGNyZWF0ZVBsYXllcignUGxheWVyIDEnKTtcbiAgY29uc3QgcGxheWVyMiA9IGNyZWF0ZVBsYXllcignQ29tcHV0ZXInKTtcbiAgY29uc3QgcGxheWVyMUdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXIyR2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG5cbiAgLy8gUmFuZG9tbHkgcGxhY2Ugc2hpcHMgb24gZ2FtZWJvYXJkc1xuICBwbGFjZVNoaXBzUmFuZG9tbHkocGxheWVyMUdhbWVib2FyZCk7XG4gIHBsYWNlU2hpcHNSYW5kb21seShwbGF5ZXIyR2FtZWJvYXJkKTtcblxuICAvLyBEZWZpbmUgdGhlIHBsYXlUdXJuIGZ1bmN0aW9uXG4gIGNvbnN0IHBsYXlUdXJuID0gKHgsIHkpID0+IHtcbiAgICAvLyBQbGF5ZXIgMSdzIHR1cm5cbiAgICBjb25zdCBwbGF5ZXIxUmVzdWx0ID0gcGxheWVyMkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpOyAvLyBBdHRhY2sgcGxheWVyMkdhbWVib2FyZCAoQ29tcHV0ZXIpXG4gICAgaWYgKHBsYXllcjJHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIC8vIFBsYXllciAxIHdpbnMgaWYgYWxsIGNvbXB1dGVyJ3Mgc2hpcHMgYXJlIHN1bmtcbiAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXIgMSB3aW5zIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBsYXllciAyIChDb21wdXRlcikgdHVyblxuICAgIGNvbnN0IGNvbXB1dGVyTW92ZSA9IHBsYXllcjEuYXR0YWNrRW5lbXkocGxheWVyMUdhbWVib2FyZCk7IC8vIEF0dGFjayBwbGF5ZXIxR2FtZWJvYXJkXG5cbiAgICBpZiAocGxheWVyMUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgLy8gQ29tcHV0ZXIgd2lucyBpZiBhbGwgcGxheWVyJ3Mgc2hpcHMgYXJlIHN1bmtcbiAgICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciB3aW5zIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciB0aGUgdXBkYXRlZCBnYW1lYm9hcmRzIHVzaW5nIHRoZSBET00gaW50ZXJhY3Rpb24gbW9kdWxlXG4gICAgcmVuZGVyR2FtZWJvYXJkcyhwbGF5ZXIxR2FtZWJvYXJkLCBwbGF5ZXIyR2FtZWJvYXJkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYXlUdXJuLFxuICB9O1xufTtcblxuY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKGdhbWVib2FyZCkgPT4ge1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTsgLy8gRGVmaW5lIHRoZSBsZW5ndGhzIG9mIHRoZSBzaGlwc1xuICBmb3IgKGNvbnN0IGxlbmd0aCBvZiBzaGlwTGVuZ3Rocykge1xuICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gTWF0aC5yYW5kb20oKSA8IDAuNTsgLy8gUmFuZG9tbHkgY2hvb3NlIGhvcml6b250YWwgb3IgdmVydGljYWwgcGxhY2VtZW50XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyAvLyBSYW5kb20gcm93IGluZGV4XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyAvLyBSYW5kb20gY29sdW1uIGluZGV4XG5cbiAgICAgIGlmIChnYW1lYm9hcmQucGxhY2VTaGlwKFNoaXAobGVuZ3RoKSwgeCwgeSwgaXNIb3Jpem9udGFsKSkge1xuICAgICAgICAvLyBBdHRlbXB0IHRvIHBsYWNlIHRoZSBzaGlwIG9uIHRoZSBnYW1lYm9hcmRcbiAgICAgICAgcGxhY2VkID0gdHJ1ZTsgLy8gU2hpcCBwbGFjZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nconst createGameboard = () => {\n  const board = Array(10)\n    .fill(null)\n    .map(() => Array(10).fill(null));\n  const ships = [];\n  const missedAttacks = [];\n\n  const placeShip = (ship, x, y, isHorizontal) => {\n    if (isHorizontal) {\n      for (let i = 0; i < ship.shipLength; i++) {\n        board[x][y + i] = ship;\n        console.log(board[x][y + i]);\n        return true;\n      }\n    } else if (!isHorizontal) {\n      for (let i = 0; i < ship.shipLength; i++) {\n        board[x + i][y] = ship;\n        console.log(board[x + i][y]);\n        return true;\n      }\n    } else {\n      console.log('unsuccesful');\n    }\n    ships.push(ship);\n  };\n\n  const receiveAttack = (x, y) => {\n    if (board[x][y] === null) {\n      missedAttacks.push({ x, y });\n      return false;\n    } else {\n      const ship = board[x][y];\n      console.log(ship);\n      ship.hit();\n      return true;\n    }\n  };\n\n  const allShipsSunk = () => ships.every((ship) => ship.isSunk());\n\n  return {\n    board,\n    ships,\n    missedAttacks,\n    placeShip,\n    receiveAttack,\n    allShipsSunk,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZWJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzP2ZjM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBBcnJheSgxMClcbiAgICAuZmlsbChudWxsKVxuICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIGlzSG9yaXpvbnRhbCkgPT4ge1xuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeF1beSArIGldID0gc2hpcDtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRbeF1beSArIGldKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNIb3Jpem9udGFsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkW3ggKyBpXVt5XSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygndW5zdWNjZXNmdWwnKTtcbiAgICB9XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IG51bGwpIHtcbiAgICAgIG1pc3NlZEF0dGFja3MucHVzaCh7IHgsIHkgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFt4XVt5XTtcbiAgICAgIGNvbnNvbGUubG9nKHNoaXApO1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBzaGlwcyxcbiAgICBtaXNzZWRBdHRhY2tzLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVib2FyZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/gameboard.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\n\n// Set up game elements and start the game\nconst player1Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst player2Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// Render initial gameboards\n(0,_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player1Gameboard, player2Gameboard);\n\n(0,_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBQ047QUFDVjtBQUNXO0FBQ0w7O0FBRWhDO0FBQ0EseUJBQXlCLHNEQUFlO0FBQ3hDLHlCQUF5QixzREFBZTs7QUFFeEM7QUFDQSxnREFBZ0I7O0FBRWhCLGlEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHJlbmRlckdhbWVib2FyZHMgZnJvbSAnLi9kb20nO1xuaW1wb3J0IGNyZWF0ZUdhbWUgZnJvbSAnLi9nYW1lJztcblxuLy8gU2V0IHVwIGdhbWUgZWxlbWVudHMgYW5kIHN0YXJ0IHRoZSBnYW1lXG5jb25zdCBwbGF5ZXIxR2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG5jb25zdCBwbGF5ZXIyR2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG5cbi8vIFJlbmRlciBpbml0aWFsIGdhbWVib2FyZHNcbnJlbmRlckdhbWVib2FyZHMocGxheWVyMUdhbWVib2FyZCwgcGxheWVyMkdhbWVib2FyZCk7XG5cbmNyZWF0ZUdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createPlayer = () => {\n  const attackedCoordinates = [];\n\n  const attackEnemy = (enemyGameboard) => {\n    let x, y;\n    if (attackedCoordinates.length === 0) {\n      x = getRandomCoordinate();\n      y = getRandomCoordinate();\n    } else {\n      const lastHit = attackedCoordinates[attackedCoordinates.length - 1];\n\n      // Check if the last hit was a successful hit\n      if (enemyGameboard.board[lastHit.x][lastHit.y] !== null) {\n        // Get adjacent coordinates only if the last hit was a ship\n        const adjacentCoordinates = getAdjacentCoordinates(lastHit);\n        const validAdjacentCoordinates = adjacentCoordinates.filter((coord) =>\n          isCoordinateValid(coord, attackedCoordinates)\n        );\n\n        if (validAdjacentCoordinates.length > 0) {\n          // If there are valid adjacent coordinates, select one of them randomly\n          const randomIndex = Math.floor(\n            Math.random() * validAdjacentCoordinates.length\n          );\n          const selectedCoord = validAdjacentCoordinates[randomIndex];\n          x = selectedCoord.x;\n          y = selectedCoord.y;\n        } else {\n          // If no valid adjacent coordinates, attack randomly\n          x = getRandomCoordinate();\n          y = getRandomCoordinate();\n        }\n      } else {\n        // If the last hit was a miss, attack randomly\n        x = getRandomCoordinate();\n        y = getRandomCoordinate();\n      }\n    }\n\n    attackedCoordinates.push({ x, y });\n    const isHit = enemyGameboard.receiveAttack(x, y);\n    return { x, y, isHit };\n  };\n\n  const getRandomCoordinate = () => Math.floor(Math.random() * 10);\n\n  const getAdjacentCoordinates = ({ x, y }) => [\n    { x: x - 1, y },\n    { x: x + 1, y },\n    { x, y: y - 1 },\n    { x, y: y + 1 },\n  ];\n\n  const isCoordinateValid = (coordinate, attackedCoordinates) => {\n    return !attackedCoordinates.some(\n      (coord) => coord.x === coordinate.x && coord.y === coordinate.y\n    );\n  };\n\n  return {\n    attackEnemy,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBLG9DQUFvQyxNQUFNO0FBQzFDLE1BQU0sYUFBYTtBQUNuQixNQUFNLGFBQWE7QUFDbkIsTUFBTSxhQUFhO0FBQ25CLE1BQU0sYUFBYTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlUGxheWVyID0gKCkgPT4ge1xuICBjb25zdCBhdHRhY2tlZENvb3JkaW5hdGVzID0gW107XG5cbiAgY29uc3QgYXR0YWNrRW5lbXkgPSAoZW5lbXlHYW1lYm9hcmQpID0+IHtcbiAgICBsZXQgeCwgeTtcbiAgICBpZiAoYXR0YWNrZWRDb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHggPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICB5ID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0SGl0ID0gYXR0YWNrZWRDb29yZGluYXRlc1thdHRhY2tlZENvb3JkaW5hdGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgbGFzdCBoaXQgd2FzIGEgc3VjY2Vzc2Z1bCBoaXRcbiAgICAgIGlmIChlbmVteUdhbWVib2FyZC5ib2FyZFtsYXN0SGl0LnhdW2xhc3RIaXQueV0gIT09IG51bGwpIHtcbiAgICAgICAgLy8gR2V0IGFkamFjZW50IGNvb3JkaW5hdGVzIG9ubHkgaWYgdGhlIGxhc3QgaGl0IHdhcyBhIHNoaXBcbiAgICAgICAgY29uc3QgYWRqYWNlbnRDb29yZGluYXRlcyA9IGdldEFkamFjZW50Q29vcmRpbmF0ZXMobGFzdEhpdCk7XG4gICAgICAgIGNvbnN0IHZhbGlkQWRqYWNlbnRDb29yZGluYXRlcyA9IGFkamFjZW50Q29vcmRpbmF0ZXMuZmlsdGVyKChjb29yZCkgPT5cbiAgICAgICAgICBpc0Nvb3JkaW5hdGVWYWxpZChjb29yZCwgYXR0YWNrZWRDb29yZGluYXRlcylcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodmFsaWRBZGphY2VudENvb3JkaW5hdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgdmFsaWQgYWRqYWNlbnQgY29vcmRpbmF0ZXMsIHNlbGVjdCBvbmUgb2YgdGhlbSByYW5kb21seVxuICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiB2YWxpZEFkamFjZW50Q29vcmRpbmF0ZXMubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZENvb3JkID0gdmFsaWRBZGphY2VudENvb3JkaW5hdGVzW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICB4ID0gc2VsZWN0ZWRDb29yZC54O1xuICAgICAgICAgIHkgPSBzZWxlY3RlZENvb3JkLnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgbm8gdmFsaWQgYWRqYWNlbnQgY29vcmRpbmF0ZXMsIGF0dGFjayByYW5kb21seVxuICAgICAgICAgIHggPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgICAgeSA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgaGl0IHdhcyBhIG1pc3MsIGF0dGFjayByYW5kb21seVxuICAgICAgICB4ID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgICB5ID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF0dGFja2VkQ29vcmRpbmF0ZXMucHVzaCh7IHgsIHkgfSk7XG4gICAgY29uc3QgaXNIaXQgPSBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIHJldHVybiB7IHgsIHksIGlzSGl0IH07XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ29vcmRpbmF0ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBjb25zdCBnZXRBZGphY2VudENvb3JkaW5hdGVzID0gKHsgeCwgeSB9KSA9PiBbXG4gICAgeyB4OiB4IC0gMSwgeSB9LFxuICAgIHsgeDogeCArIDEsIHkgfSxcbiAgICB7IHgsIHk6IHkgLSAxIH0sXG4gICAgeyB4LCB5OiB5ICsgMSB9LFxuICBdO1xuXG4gIGNvbnN0IGlzQ29vcmRpbmF0ZVZhbGlkID0gKGNvb3JkaW5hdGUsIGF0dGFja2VkQ29vcmRpbmF0ZXMpID0+IHtcbiAgICByZXR1cm4gIWF0dGFja2VkQ29vcmRpbmF0ZXMuc29tZShcbiAgICAgIChjb29yZCkgPT4gY29vcmQueCA9PT0gY29vcmRpbmF0ZS54ICYmIGNvb3JkLnkgPT09IGNvb3JkaW5hdGUueVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2tFbmVteSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length) => {\n  // const shipName = name;\n  const shipLength = length;\n  const hits = Array(length).fill(false);\n\n  const hit = () => {\n    const indexOfFalse = hits.findIndex((item) => item === false);\n    if (indexOfFalse !== -1) {\n      hits[indexOfFalse] = true;\n    }\n  };\n\n  const isSunk = () => {\n    return hits.every((hit) => hit);\n  };\n\n  return { shipLength, hits, hit, isSunk };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzP2QwMzciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgLy8gY29uc3Qgc2hpcE5hbWUgPSBuYW1lO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBjb25zdCBoaXRzID0gQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5kZXhPZkZhbHNlID0gaGl0cy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IGZhbHNlKTtcbiAgICBpZiAoaW5kZXhPZkZhbHNlICE9PSAtMSkge1xuICAgICAgaGl0c1tpbmRleE9mRmFsc2VdID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzLmV2ZXJ5KChoaXQpID0+IGhpdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2hpcExlbmd0aCwgaGl0cywgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ship.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;