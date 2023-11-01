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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nconst createGameboard = () => {\n  const board = Array(10)\n    .fill(null)\n    .map(() => Array(10).fill(null));\n  const ships = [];\n  const missedAttacks = [];\n\n  const placeShip = (ship, x, y, isHorizontal) => {\n    if (isHorizontal) {\n      for (let i = 0; i < ship.shipLength; i++) {\n        board[x][y + i] = ship;\n      }\n    } else {\n      for (let i = 0; i < ship.shipLength; i++) {\n        board[x + i][y] = ship;\n      }\n    }\n    ships.push(ship);\n  };\n\n  const receiveAttack = (x, y) => {\n    if (board[x][y] === null) {\n      missedAttacks.push({ x, y });\n      return false;\n    } else {\n      const ship = board[x][y];\n      console.log(ship);\n      ship.hit();\n      return true;\n    }\n  };\n\n  const allShipsSunk = () => ships.every((ship) => ship.isSunk());\n\n  return {\n    board,\n    ships,\n    missedAttacks,\n    placeShip,\n    receiveAttack,\n    allShipsSunk,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZWJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcz9mYzNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgLmZpbGwobnVsbClcbiAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCBpc0hvcml6b250YWwpID0+IHtcbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeCArIGldW3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IG51bGwpIHtcbiAgICAgIG1pc3NlZEF0dGFja3MucHVzaCh7IHgsIHkgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFt4XVt5XTtcbiAgICAgIGNvbnNvbGUubG9nKHNoaXApO1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBzaGlwcyxcbiAgICBtaXNzZWRBdHRhY2tzLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVib2FyZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/gameboard.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\n\n// Example usage:\nconst playerShip = (0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('cruiser', 3);\nconst computerShip = (0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('battleship', 4);\nconsole.log(playerShip);\n\nconst playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst compGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nplayerGameboard.placeShip(playerShip, 4, 5, true);\ncompGameboard.placeShip(computerShip, 4, 5, true);\n\nconst compPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst result = compPlayer.attackEnemy(playerGameboard);\nconsole.log(result); // Logs the attack coordinate and whether it's a hit or miss\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwQztBQUNOO0FBQ1Y7O0FBRTFCO0FBQ0EsbUJBQW1CLGlEQUFJO0FBQ3ZCLHFCQUFxQixpREFBSTtBQUN6Qjs7QUFFQSx3QkFBd0Isc0RBQWU7QUFDdkMsc0JBQXNCLHNEQUFlO0FBQ3JDO0FBQ0E7O0FBRUEsbUJBQW1CLG1EQUFZO0FBQy9CLGdCQUFnQixtREFBWTs7QUFFNUI7QUFDQSxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG5jb25zdCBwbGF5ZXJTaGlwID0gU2hpcCgnY3J1aXNlcicsIDMpO1xuY29uc3QgY29tcHV0ZXJTaGlwID0gU2hpcCgnYmF0dGxlc2hpcCcsIDQpO1xuY29uc29sZS5sb2cocGxheWVyU2hpcCk7XG5cbmNvbnN0IHBsYXllckdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuY29uc3QgY29tcEdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xucGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcChwbGF5ZXJTaGlwLCA0LCA1LCB0cnVlKTtcbmNvbXBHYW1lYm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyU2hpcCwgNCwgNSwgdHJ1ZSk7XG5cbmNvbnN0IGNvbXBQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoKTtcbmNvbnN0IHBsYXllcjEgPSBjcmVhdGVQbGF5ZXIoKTtcblxuY29uc3QgcmVzdWx0ID0gY29tcFBsYXllci5hdHRhY2tFbmVteShwbGF5ZXJHYW1lYm9hcmQpO1xuY29uc29sZS5sb2cocmVzdWx0KTsgLy8gTG9ncyB0aGUgYXR0YWNrIGNvb3JkaW5hdGUgYW5kIHdoZXRoZXIgaXQncyBhIGhpdCBvciBtaXNzXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createPlayer = () => {\n  const attackedCoordinates = [];\n\n  const attackEnemy = (enemyGameboard) => {\n    let x, y;\n    if (attackedCoordinates.length === 0) {\n      x = 4;\n      y = 5;\n    } else {\n      const lastHit = attackedCoordinates[attackedCoordinates.length - 1];\n\n      // Check if the last hit was a successful hit\n      if (enemyGameboard.board[lastHit.x][lastHit.y] !== null) {\n        // Get adjacent coordinates only if the last hit was a ship\n        const adjacentCoordinates = getAdjacentCoordinates(lastHit);\n        const validAdjacentCoordinates = adjacentCoordinates.filter((coord) =>\n          isCoordinateValid(coord, attackedCoordinates)\n        );\n\n        if (validAdjacentCoordinates.length > 0) {\n          // If there are valid adjacent coordinates, select one of them randomly\n          const randomIndex = Math.floor(\n            Math.random() * validAdjacentCoordinates.length\n          );\n          const selectedCoord = validAdjacentCoordinates[randomIndex];\n          x = selectedCoord.x;\n          y = selectedCoord.y;\n        } else {\n          // If no valid adjacent coordinates, attack randomly\n          x = getRandomCoordinate();\n          y = getRandomCoordinate();\n        }\n      } else {\n        // If the last hit was a miss, attack randomly\n        x = getRandomCoordinate();\n        y = getRandomCoordinate();\n      }\n    }\n\n    attackedCoordinates.push({ x, y });\n    const isHit = enemyGameboard.receiveAttack(x, y);\n    return { x, y, isHit };\n  };\n\n  const getRandomCoordinate = () => Math.floor(Math.random() * 10);\n\n  const getAdjacentCoordinates = ({ x, y }) => [\n    { x: x - 1, y },\n    { x: x + 1, y },\n    { x, y: y - 1 },\n    { x, y: y + 1 },\n  ];\n\n  const isCoordinateValid = (coordinate, attackedCoordinates) => {\n    return !attackedCoordinates.some(\n      (coord) => coord.x === coordinate.x && coord.y === coordinate.y\n    );\n  };\n\n  return {\n    attackEnemy,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBLG9DQUFvQyxNQUFNO0FBQzFDLE1BQU0sYUFBYTtBQUNuQixNQUFNLGFBQWE7QUFDbkIsTUFBTSxhQUFhO0FBQ25CLE1BQU0sYUFBYTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlUGxheWVyID0gKCkgPT4ge1xuICBjb25zdCBhdHRhY2tlZENvb3JkaW5hdGVzID0gW107XG5cbiAgY29uc3QgYXR0YWNrRW5lbXkgPSAoZW5lbXlHYW1lYm9hcmQpID0+IHtcbiAgICBsZXQgeCwgeTtcbiAgICBpZiAoYXR0YWNrZWRDb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHggPSA0O1xuICAgICAgeSA9IDU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RIaXQgPSBhdHRhY2tlZENvb3JkaW5hdGVzW2F0dGFja2VkQ29vcmRpbmF0ZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsYXN0IGhpdCB3YXMgYSBzdWNjZXNzZnVsIGhpdFxuICAgICAgaWYgKGVuZW15R2FtZWJvYXJkLmJvYXJkW2xhc3RIaXQueF1bbGFzdEhpdC55XSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBHZXQgYWRqYWNlbnQgY29vcmRpbmF0ZXMgb25seSBpZiB0aGUgbGFzdCBoaXQgd2FzIGEgc2hpcFxuICAgICAgICBjb25zdCBhZGphY2VudENvb3JkaW5hdGVzID0gZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhsYXN0SGl0KTtcbiAgICAgICAgY29uc3QgdmFsaWRBZGphY2VudENvb3JkaW5hdGVzID0gYWRqYWNlbnRDb29yZGluYXRlcy5maWx0ZXIoKGNvb3JkKSA9PlxuICAgICAgICAgIGlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkLCBhdHRhY2tlZENvb3JkaW5hdGVzKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh2YWxpZEFkamFjZW50Q29vcmRpbmF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSB2YWxpZCBhZGphY2VudCBjb29yZGluYXRlcywgc2VsZWN0IG9uZSBvZiB0aGVtIHJhbmRvbWx5XG4gICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIHZhbGlkQWRqYWNlbnRDb29yZGluYXRlcy5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ29vcmQgPSB2YWxpZEFkamFjZW50Q29vcmRpbmF0ZXNbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgIHggPSBzZWxlY3RlZENvb3JkLng7XG4gICAgICAgICAgeSA9IHNlbGVjdGVkQ29vcmQueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiBubyB2YWxpZCBhZGphY2VudCBjb29yZGluYXRlcywgYXR0YWNrIHJhbmRvbWx5XG4gICAgICAgICAgeCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgICB5ID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBoaXQgd2FzIGEgbWlzcywgYXR0YWNrIHJhbmRvbWx5XG4gICAgICAgIHggPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgIHkgPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXR0YWNrZWRDb29yZGluYXRlcy5wdXNoKHsgeCwgeSB9KTtcbiAgICBjb25zdCBpc0hpdCA9IGVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgcmV0dXJuIHsgeCwgeSwgaXNIaXQgfTtcbiAgfTtcblxuICBjb25zdCBnZXRSYW5kb21Db29yZGluYXRlID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGNvbnN0IGdldEFkamFjZW50Q29vcmRpbmF0ZXMgPSAoeyB4LCB5IH0pID0+IFtcbiAgICB7IHg6IHggLSAxLCB5IH0sXG4gICAgeyB4OiB4ICsgMSwgeSB9LFxuICAgIHsgeCwgeTogeSAtIDEgfSxcbiAgICB7IHgsIHk6IHkgKyAxIH0sXG4gIF07XG5cbiAgY29uc3QgaXNDb29yZGluYXRlVmFsaWQgPSAoY29vcmRpbmF0ZSwgYXR0YWNrZWRDb29yZGluYXRlcykgPT4ge1xuICAgIHJldHVybiAhYXR0YWNrZWRDb29yZGluYXRlcy5zb21lKFxuICAgICAgKGNvb3JkKSA9PiBjb29yZC54ID09PSBjb29yZGluYXRlLnggJiYgY29vcmQueSA9PT0gY29vcmRpbmF0ZS55XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFja0VuZW15LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (name, length) => {\n  const shipName = name;\n  const shipLength = length;\n  const hits = Array(length).fill(false);\n\n  const hit = () => {\n    const indexOfFalse = hits.findIndex((item) => item === false);\n    if (indexOfFalse !== -1) {\n      hits[indexOfFalse] = true;\n    }\n  };\n\n  const isSunk = () => {\n    return hits.every((hit) => hit);\n  };\n\n  return { shipName, shipLength, hits, hit, isSunk };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzP2QwMzciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgY29uc3Qgc2hpcE5hbWUgPSBuYW1lO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBjb25zdCBoaXRzID0gQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5kZXhPZkZhbHNlID0gaGl0cy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IGZhbHNlKTtcbiAgICBpZiAoaW5kZXhPZkZhbHNlICE9PSAtMSkge1xuICAgICAgaGl0c1tpbmRleE9mRmFsc2VdID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzLmV2ZXJ5KChoaXQpID0+IGhpdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2hpcE5hbWUsIHNoaXBMZW5ndGgsIGhpdHMsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ship.js\n");

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