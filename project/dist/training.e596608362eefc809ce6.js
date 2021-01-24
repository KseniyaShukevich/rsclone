/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./page-training/index.js":
/*!********************************!*\
  !*** ./page-training/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_training__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/training */ "./page-training/scripts/training.js");
/* harmony import */ var _scripts_training__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_training__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/test */ "./page-training/scripts/test.js");
/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_test__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./page-training/scripts/test.js":
/*!***************************************!*\
  !*** ./page-training/scripts/test.js ***!
  \***************************************/
/***/ (() => {

console.log('I am here!');

/***/ }),

/***/ "./page-training/scripts/training.js":
/*!*******************************************!*\
  !*** ./page-training/scripts/training.js ***!
  \*******************************************/
/***/ (() => {

var items = document.querySelector('.items');
var currentSlide = 0;

var turnNext = function turnNext(direction) {
  if (direction) {
    currentSlide += 1;
    items.style.left = "".concat(-100 * currentSlide, "vw");
  } else {
    currentSlide -= 1;
    items.style.left = "".concat(-100 * currentSlide, "vw");
  }
};

document.querySelector('.arrow.right').onclick = function () {
  return turnNext(true);
};

document.querySelector('.arrow.left').onclick = function () {
  return turnNext(false);
};

/***/ }),

/***/ "./page-training/style.scss":
/*!**********************************!*\
  !*** ./page-training/style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./page-training/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./page-training/style.scss");
/******/ })()
;
//# sourceMappingURL=training.e596608362eefc809ce6.js.map