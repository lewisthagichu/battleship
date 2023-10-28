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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('battleship', 4);\n\nconsole.log(battleship.getName());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBZ0M7O0FBRWhDLG1CQUFtQixpREFBVTs7QUFFN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSAnLi9zaGlwJztcblxuY29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoJ2JhdHRsZXNoaXAnLCA0KTtcblxuY29uc29sZS5sb2coYmF0dGxlc2hpcC5nZXROYW1lKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createShip = (shipName, shipLength) => {\n  let name = shipName;\n  let length = shipLength;\n  let timesHit = 0;\n  let isSunk = false;\n  let isFound = false;\n\n  const getName = () => name;\n  const getLength = () => length;\n  const getFound = () => isFound;\n  const getTimesHit = () => timesHit;\n  const getSunk = () => isSunk;\n\n  const found = () => {\n    isFound = true;\n  };\n\n  const hit = () => {\n    timesHit += 1;\n    if (timesHit === length) sunk();\n  };\n\n  const sunk = () => {\n    isSunk = true;\n  };\n\n  const resetFound = () => {\n    isFound = false;\n  };\n\n  return {\n    getName,\n    getLength,\n    getFound,\n    getTimesHit,\n    getSunk,\n    hit,\n    sunk,\n    found,\n    resetFound,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcz9kMDM3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZVNoaXAgPSAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpID0+IHtcbiAgbGV0IG5hbWUgPSBzaGlwTmFtZTtcbiAgbGV0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG4gIGxldCB0aW1lc0hpdCA9IDA7XG4gIGxldCBpc1N1bmsgPSBmYWxzZTtcbiAgbGV0IGlzRm91bmQgPSBmYWxzZTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBnZXRGb3VuZCA9ICgpID0+IGlzRm91bmQ7XG4gIGNvbnN0IGdldFRpbWVzSGl0ID0gKCkgPT4gdGltZXNIaXQ7XG4gIGNvbnN0IGdldFN1bmsgPSAoKSA9PiBpc1N1bms7XG5cbiAgY29uc3QgZm91bmQgPSAoKSA9PiB7XG4gICAgaXNGb3VuZCA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHRpbWVzSGl0ICs9IDE7XG4gICAgaWYgKHRpbWVzSGl0ID09PSBsZW5ndGgpIHN1bmsoKTtcbiAgfTtcblxuICBjb25zdCBzdW5rID0gKCkgPT4ge1xuICAgIGlzU3VuayA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRGb3VuZCA9ICgpID0+IHtcbiAgICBpc0ZvdW5kID0gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldExlbmd0aCxcbiAgICBnZXRGb3VuZCxcbiAgICBnZXRUaW1lc0hpdCxcbiAgICBnZXRTdW5rLFxuICAgIGhpdCxcbiAgICBzdW5rLFxuICAgIGZvdW5kLFxuICAgIHJlc2V0Rm91bmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGlwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ship.js\n");

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