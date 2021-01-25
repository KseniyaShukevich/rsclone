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

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./page-user-settings/customization/settings.js":
/*!******************************************************!*\
  !*** ./page-user-settings/customization/settings.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_data_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-user */ "./services/data-user.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request */ "./services/request.js");




var btnSave = document.querySelector('#btn-save');
var inputEmail = document.querySelector('#new-email');
var inputImage = document.querySelector('#file');
var containerImagePreview = document.querySelector('#image-preview');
var emailErrorMessage = document.querySelector('#email-error-message');
var inputCurrPass = document.querySelector('#curr-password');
var currPassErrorMessage = document.querySelector('#currPass-error-message');
var inputNewPass = document.querySelector('#new-password');
var newPassErrorMessage = document.querySelector('#new-pass-error-message');
var inputRepeatNewPass = document.querySelector('#repeat-new-password');
var repeatNewPassErrorMessage = document.querySelector('#repeat-new-pass-error-message');
var saveErrorMessage = document.querySelector('#save-error-message');
var emailErrorMessageReg = document.querySelector('#email-error-message-reg');
var successSaveMessage = document.querySelector('#success-save-message');

(function addUserToken() {
  var userToken = document.querySelector('#user-token');
  userToken.value = (0,_services_data_user__WEBPACK_IMPORTED_MODULE_2__.default)();
})();

function loadImage() {
  if (inputImage.files && inputImage.files[0]) {
    var reader = new FileReader();
    reader.addEventListener('loadend', function (e) {
      containerImagePreview.src = e.target.result;
    });
    reader.readAsDataURL(inputImage.files[0]);
  }
}

function updateImage() {
  var formElement = document.querySelector('#user-settings');
  var req = new XMLHttpRequest();
  req.open('POST', 'settings/api/image');
  req.send(new FormData(formElement));
}

function changeUserName() {
  var name = document.querySelector('#new-name').value.trim();

  if (name) {
    (0,_services_request__WEBPACK_IMPORTED_MODULE_3__.default)('/settings/api/name', 'PUT', {
      name: name,
      token: (0,_services_data_user__WEBPACK_IMPORTED_MODULE_2__.default)()
    });
  }
}

function changeUserEmail() {
  var email = inputEmail.value.trim();

  if (email) {
    (0,_services_request__WEBPACK_IMPORTED_MODULE_3__.default)('/settings/api/email', 'PUT', {
      email: email,
      token: (0,_services_data_user__WEBPACK_IMPORTED_MODULE_2__.default)()
    });
  }
}

function isFreeEmail(_x) {
  return _isFreeEmail.apply(this, arguments);
}

function _isFreeEmail() {
  _isFreeEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!/^[a-z0-9_.]+@\w+\.\w+$/i.test(email)) {
              _context.next = 7;
              break;
            }

            _context.next = 3;
            return (0,_services_request__WEBPACK_IMPORTED_MODULE_3__.default)('/settings/api/email', 'POST', {
              email: email
            });

          case 3:
            result = _context.sent;

            if (result.length && !emailErrorMessageReg.classList.contains('display-block')) {
              emailErrorMessageReg.classList.add('display-block');
            }

            if (!result.length) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", false);

          case 7:
            return _context.abrupt("return", true);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _isFreeEmail.apply(this, arguments);
}

function checkEmailFormat() {
  return _checkEmailFormat.apply(this, arguments);
}

function _checkEmailFormat() {
  _checkEmailFormat = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
    var email;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = inputEmail.value.trim();

            if (!(email && !/^[a-z0-9_.]+@\w+\.\w+$/i.test(email))) {
              _context2.next = 4;
              break;
            }

            if (!emailErrorMessage.classList.contains('display-block')) {
              emailErrorMessage.classList.add('display-block');
              inputEmail.classList.add('error-color');
            }

            return _context2.abrupt("return", false);

          case 4:
            isFreeEmail(email);
            emailErrorMessage.classList.remove('display-block');
            return _context2.abrupt("return", true);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _checkEmailFormat.apply(this, arguments);
}

function deleteError(e, el) {
  e.target.classList.remove('error-color');
  el.classList.remove('display-block');
}

function updateUserPass(currPass, newPass, repeatNewPass) {
  if (newPass === repeatNewPass && newPass.length > 5 && repeatNewPass.length > 5) {
    (0,_services_request__WEBPACK_IMPORTED_MODULE_3__.default)('/settings/api/password', 'PUT', {
      currPass: currPass,
      newPass: newPass,
      token: (0,_services_data_user__WEBPACK_IMPORTED_MODULE_2__.default)()
    });
  }
}

function checkCurrPassword() {
  return _checkCurrPassword.apply(this, arguments);
}

function _checkCurrPassword() {
  _checkCurrPassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
    var currPass, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            currPass = inputCurrPass.value.trim();

            if (!currPass) {
              _context3.next = 8;
              break;
            }

            _context3.next = 4;
            return (0,_services_request__WEBPACK_IMPORTED_MODULE_3__.default)('/settings/api/password', 'POST', {
              currPass: currPass,
              token: (0,_services_data_user__WEBPACK_IMPORTED_MODULE_2__.default)()
            });

          case 4:
            result = _context3.sent;

            if (result.password) {
              _context3.next = 8;
              break;
            }

            if (!inputCurrPass.classList.contains('error-color')) {
              inputCurrPass.classList.add('error-color');
              currPassErrorMessage.classList.add('display-block');
            }

            return _context3.abrupt("return", false);

          case 8:
            return _context3.abrupt("return", true);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _checkCurrPassword.apply(this, arguments);
}

function checkNewPassword() {
  var newPass = inputNewPass.value.trim();

  if (newPass && newPass.length < 6) {
    if (!inputNewPass.classList.contains('error-color')) {
      inputNewPass.classList.add('error-color');
      newPassErrorMessage.classList.add('display-block');
    }
  }
}

function checkRepeatNewPass() {
  var newPass = inputNewPass.value.trim();
  var repeatNewPass = inputRepeatNewPass.value.trim();

  if (newPass !== repeatNewPass) {
    if (!inputRepeatNewPass.classList.contains('error-color')) {
      inputRepeatNewPass.classList.add('error-color');
      repeatNewPassErrorMessage.classList.add('display-block');
    }
  }
}

function changePassword() {
  var currPass = inputCurrPass.value.trim();
  var newPass = inputNewPass.value.trim();
  var repeatNewPass = inputRepeatNewPass.value.trim();

  if (currPass && newPass && repeatNewPass) {
    updateUserPass(currPass, newPass, repeatNewPass);
  }
}

function isCorrectNewPass() {
  var newPass = inputNewPass.value.trim();
  var repeatNewPass = inputRepeatNewPass.value.trim();

  if (newPass === repeatNewPass && newPass.length > 5 && repeatNewPass.length > 5 || !newPass && !repeatNewPass) {
    return true;
  }

  return false;
}

function getSuccessMessage() {
  successSaveMessage.classList.add('display-block');
  setTimeout(function () {
    successSaveMessage.classList.remove('display-block');
  }, 3000);
}

function getErrorMessage() {
  saveErrorMessage.classList.add('display-block');
  setTimeout(function () {
    saveErrorMessage.classList.remove('display-block');
  }, 3000);
}

function updateUser() {
  updateImage();
  changeUserName();
  changeUserEmail();
  changePassword();
}

function changeUserData(_x2) {
  return _changeUserData.apply(this, arguments);
}

function _changeUserData() {
  _changeUserData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(e) {
    var email, isCorrectPass, isFree, isValidEmail;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            e.preventDefault();
            email = inputEmail.value.trim();
            _context4.next = 4;
            return checkCurrPassword();

          case 4:
            isCorrectPass = _context4.sent;
            _context4.next = 7;
            return isFreeEmail(email);

          case 7:
            isFree = _context4.sent;
            _context4.next = 10;
            return checkEmailFormat();

          case 10:
            isValidEmail = _context4.sent;

            if (isValidEmail && isCorrectPass && isCorrectNewPass() && isFree) {
              updateUser();
              getSuccessMessage();
            } else {
              getErrorMessage();
            }

            e.target.blur();

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _changeUserData.apply(this, arguments);
}

btnSave.addEventListener('click', changeUserData);
inputImage.addEventListener('change', loadImage);
inputEmail.addEventListener('blur', checkEmailFormat);
inputEmail.addEventListener('focus', function (e) {
  deleteError(e, emailErrorMessage);
});
inputEmail.addEventListener('focus', function () {
  emailErrorMessageReg.classList.remove('display-block');
});
inputCurrPass.addEventListener('blur', checkCurrPassword);
inputCurrPass.addEventListener('focus', function (e) {
  deleteError(e, currPassErrorMessage);
});
inputNewPass.addEventListener('blur', checkNewPassword);
inputNewPass.addEventListener('focus', function (e) {
  deleteError(e, newPassErrorMessage);
});
inputRepeatNewPass.addEventListener('blur', checkRepeatNewPass);
inputRepeatNewPass.addEventListener('focus', function (e) {
  deleteError(e, repeatNewPassErrorMessage);
});

/***/ }),

/***/ "./page-user-settings/index.js":
/*!*************************************!*\
  !*** ./page-user-settings/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./page-user-settings/styles/index.scss");
/* harmony import */ var _customization_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customization/settings */ "./page-user-settings/customization/settings.js");




/***/ }),

/***/ "./services/constants.js":
/*!*******************************!*\
  !*** ./services/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "LSTORAGEID": () => /* binding */ LSTORAGEID
/* harmony export */ });
var URL = 'http://localhost:3000'; // const URL = 'https://rss-english.herokuapp.com';

var LSTORAGEID = 'qwertyujn';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URL);


/***/ }),

/***/ "./services/data-user.js":
/*!*******************************!*\
  !*** ./services/data-user.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUserToken
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./services/constants.js");

function getUserToken() {
  return localStorage.getItem("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.LSTORAGEID, "token"));
}

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./services/constants.js");



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
            return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.default).concat(url), {
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

/***/ "./page-user-settings/styles/index.scss":
/*!**********************************************!*\
  !*** ./page-user-settings/styles/index.scss ***!
  \**********************************************/
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
/******/ 			"pageUserSettings": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./page-user-settings/index.js","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_regenerator-runtime_runtime_js"]
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
//# sourceMappingURL=pageUserSettings.09fc396d0f50fd614945.js.map