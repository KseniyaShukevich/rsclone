/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./page-registration/authorization/log.js":
/*!************************************************!*\
  !*** ./page-registration/authorization/log.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request */ "./services/request.js");



var logBtn = document.getElementById('btn-log');
var form = document.getElementById('log');

function checkInputs() {
  for (var _len = arguments.length, ids = new Array(_len), _key = 0; _key < _len; _key++) {
    ids[_key] = arguments[_key];
  }

  ids.forEach(function (id) {
    var el = document.getElementById(id);

    if (!el.value.trim()) {
      el.style.borderColor = 'red';
      el.addEventListener('focus', function (e) {
        e.target.style.borderColor = '';
      });
    }
  });
}

function checkUser(_x) {
  return _checkUser.apply(this, arguments);
}

function _checkUser() {
  _checkUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
    var email, password, message, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            email = document.getElementById('email-log').value.trim();
            password = document.getElementById('password-log').value.trim();
            message = document.querySelector('.message-error');
            _context.next = 6;
            return (0,_services_request__WEBPACK_IMPORTED_MODULE_2__.default)('getStatusLog', 'POST', {
              email: email,
              password: password
            });

          case 6:
            response = _context.sent;
            checkInputs('email-log', 'password-log');

            if (response.status === '401') {
              message.classList.add('display-block');
            } else {
              form.submit();
              console.log(response.user[0]);
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkUser.apply(this, arguments);
}

logBtn.addEventListener('click', checkUser);

/***/ }),

/***/ "./page-registration/authorization/reg.js":
/*!************************************************!*\
  !*** ./page-registration/authorization/reg.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ regUser
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request */ "./services/request.js");




function checkUser(_x, _x2, _x3, _x4) {
  return _checkUser.apply(this, arguments);
}

function _checkUser() {
  _checkUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name, email, password, messageError) {
    var form, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(name && /\w+@\w+\.\w+/.test(email) && password.length > 5)) {
              _context.next = 8;
              break;
            }

            form = document.getElementById('reg');
            _context.next = 4;
            return (0,_services_request__WEBPACK_IMPORTED_MODULE_2__.default)('registration', 'POST', {
              name: name,
              email: email,
              password: password,
              progress: []
            });

          case 4:
            result = _context.sent;

            // if ()
            if (!result.status) {
              messageError.classList.add('display-block');
            } else {
              form.submit();
            }

            _context.next = 9;
            break;

          case 8:
            messageError.classList.add('display-block');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkUser.apply(this, arguments);
}

function regUser(_x5) {
  return _regUser.apply(this, arguments);
}

function _regUser() {
  _regUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
    var name, email, password, messageError;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            name = document.getElementById('name-reg').value.trim();
            email = document.getElementById('email-reg').value.trim();
            password = document.getElementById('pass-reg').value.trim();
            messageError = document.getElementById('error-reg');
            checkUser(name, email, password, messageError);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _regUser.apply(this, arguments);
}

/***/ }),

/***/ "./page-registration/index.js":
/*!************************************!*\
  !*** ./page-registration/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./page-registration/styles/index.scss");
/* harmony import */ var _test_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/test */ "./page-registration/test/test.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/request */ "./services/request.js");
/* harmony import */ var _authorization_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorization/log */ "./page-registration/authorization/log.js");
/* harmony import */ var _authorization_reg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authorization/reg */ "./page-registration/authorization/reg.js");
/* harmony import */ var _scripts_switcher_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/switcher.js */ "./scripts/switcher.js");
/* harmony import */ var _scripts_switcher_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_switcher_js__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./page-registration/test/test.js":
/*!****************************************!*\
  !*** ./page-registration/test/test.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/request */ "./services/request.js");
/* harmony import */ var _authorization_reg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authorization/reg */ "./page-registration/authorization/reg.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var contact = [{
  id: 2,
  name: 'ssfdf',
  value: 'fffffAf',
  marked: false
}];
var id = 2;

function getResult() {
  return _getResult.apply(this, arguments);
}

function _getResult() {
  _getResult = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var data, dataPost, result, updated;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_services_request__WEBPACK_IMPORTED_MODULE_4__.default)('contacts');

          case 2:
            data = _context.sent;
            _context.next = 5;
            return (0,_services_request__WEBPACK_IMPORTED_MODULE_4__.default)('contacts', 'POST', contact);

          case 5:
            dataPost = _context.sent;
            _context.next = 8;
            return (0,_services_request__WEBPACK_IMPORTED_MODULE_4__.default)("contacts/".concat(id), 'DELETE');

          case 8:
            result = _context.sent;
            _context.next = 11;
            return (0,_services_request__WEBPACK_IMPORTED_MODULE_4__.default)("contacts/".concat(id), 'PUT', _objectSpread(_objectSpread({}, contact), {}, {
              marked: true
            }));

          case 11:
            updated = _context.sent;
            // синхронизация фронтенда и бэкенда
            contact.marked = updated.marked;
            console.log(data);
            console.log(dataPost);
            console.log(result);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getResult.apply(this, arguments);
}

function callRegistrationFunction() {
  var registrationButton = document.querySelector('#btn-reg');
  registrationButton.addEventListener('click', _authorization_reg__WEBPACK_IMPORTED_MODULE_5__.default);
}

getResult();
callRegistrationFunction();

/***/ }),

/***/ "./scripts/switcher.js":
/*!*****************************!*\
  !*** ./scripts/switcher.js ***!
  \*****************************/
/***/ (() => {

function switchColorTheme() {
  var switchThemeButton = document.querySelector('.form-switch_color');
  switchThemeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      localStorage.setItem('colorTheme', 'dark');
    } else {
      localStorage.setItem('colorTheme', 'light');
    }
  });
}

function setColorTheme() {
  var colorValue = localStorage.getItem('colorTheme');
  var switchThemeInput = document.querySelector('.form-switch_color input');

  if (colorValue === 'dark') {
    document.body.classList.add('dark');
    switchThemeInput.setAttribute('checked', '');
  }
}

switchColorTheme();
setColorTheme();

/***/ }),

/***/ "./services/request.js":
/*!*****************************!*\
  !*** ./services/request.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ request
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url */ "./services/url.js");



function request(_x) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {
    var method,
        data,
        headers,
        body,
        response,
        result,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'GET';
            data = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            headers = {};

            if (data) {
              headers['Content-Type'] = 'application/json';
              body = JSON.stringify(data);
            }

            _context.next = 6;
            return fetch("".concat(_url__WEBPACK_IMPORTED_MODULE_2__.default).concat(url), {
              method: method,
              headers: headers,
              body: body
            });

          case 6:
            response = _context.sent;

            if (response.ok) {
              _context.next = 10;
              break;
            }

            console.warn('Error', response.statusText);
            return _context.abrupt("return", null);

          case 10:
            _context.next = 12;
            return response.json();

          case 12:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _request.apply(this, arguments);
}

/***/ }),

/***/ "./services/url.js":
/*!*************************!*\
  !*** ./services/url.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var URL = 'http://localhost:3000/api/';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URL);

/***/ }),

/***/ "./page-registration/styles/index.scss":
/*!*********************************************!*\
  !*** ./page-registration/styles/index.scss ***!
  \*********************************************/
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"pageOne": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./page-registration/index.js","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_regenerator-runtime_runtime_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=pageOne.ac7e82595d4ec2beb65a.js.map