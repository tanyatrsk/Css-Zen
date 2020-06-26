/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

const btnSrch = document.querySelector('.selector-find');
const btnNext = document.querySelector('.selector-next');
const btnPrev = document.querySelector('.selector-prev');
const btnParent = document.querySelector('.nav-top');
const btnChild = document.querySelector('.nav-bottom');
const btnNextParent = document.querySelector('.nav-right');
const btnPrevParent = document.querySelector('.nav-left');
const input = document.querySelector('.selector');

const SELECTOR_NOW = {};
function elementStyle(elem) {
  elemStyle = elem;
  elemStyle.style.outline = 'solid red 5px';
  elemStyle.style.backgroundColor = 'lightblue';
}
function elementUnstyle(elem) {
  elemUnstyle = elem;
  elemUnstyle.style.outline = 'none';
  elemUnstyle.style.backgroundColor = '';
}
function enableNextPrevBtns() {
  if (SELECTOR_NOW.now[SELECTOR_NOW.id + 1] != undefined) {
    btnNext.disabled = false;
  } else {
    btnNext.disabled = true;
  }
  if (SELECTOR_NOW.now[SELECTOR_NOW.id - 1] != undefined) {
    btnPrev.disabled = false;
  } else {
    btnPrev.disabled = true;
  }
}
function enabletBottomBtns(elem) {
  if (SELECTOR_NOW.now.length == undefined) {
    btnNext.disabled = true;
    btnPrev.disabled = true;
  }
  if (elem.parentElement != undefined) {
    btnParent.disabled = false;
  } else {
    btnParent.disabled = true;
  }
  if (elem.children[0] != undefined) {
    btnChild.disabled = false;
  } else {
    btnChild.disabled = true;
  }
  if (elem.nextElementSibling != undefined) {
    btnNextParent.disabled = false;
  } else {
    btnNextParent.disabled = true;
  }
  if (elem.previousElementSibling != undefined) {
    btnPrevParent.disabled = false;
  } else {
    btnPrevParent.disabled = true;
  }
  if (elem == document.querySelector('body')) {
    btnParent.disabled = true;
    btnNextParent.disabled = true;
    btnPrevParent.disabled = true;
  }
}
btnSrch.addEventListener('click', function () {
  if (document.querySelector(input.value)) {
    if (SELECTOR_NOW.now != undefined) {
      elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    }
    const elem = document.querySelectorAll(input.value);
    elementStyle(elem[0]);
    SELECTOR_NOW.now = elem;
    SELECTOR_NOW.id = 0;
    if (elem[1] != undefined) {
      btnNext.disabled = false;
      btnPrev.disabled = true;
    }
    enableNextPrevBtns();
    enabletBottomBtns(elem[0]);
  }
});
btnNext.addEventListener('click', function () {
  if (SELECTOR_NOW.now[SELECTOR_NOW.id + 1] != undefined) {
    const nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id + 1];
    elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    SELECTOR_NOW.id += 1;
    elementStyle(nextElem);
    enableNextPrevBtns();
    enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
  }
});
btnPrev.addEventListener('click', function () {
  if (SELECTOR_NOW.now[SELECTOR_NOW.id - 1] != undefined) {
    const nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id - 1];
    elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    SELECTOR_NOW.id -= 1;
    elementStyle(nextElem);
    enableNextPrevBtns();
    enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
  }
});

btnParent.addEventListener('click', function () {
  if (SELECTOR_NOW.now.length != undefined) {
    SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
  }
  elementUnstyle(SELECTOR_NOW.now);
  const parentElem = SELECTOR_NOW.now.parentElement;
  elementStyle(parentElem);
  SELECTOR_NOW.now = parentElem;
  enabletBottomBtns(SELECTOR_NOW.now);
});
btnChild.addEventListener('click', function () {
  if (SELECTOR_NOW.now.length != undefined) {
    SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
  }
  if (SELECTOR_NOW.now.children[0] != undefined) {
    elementUnstyle(SELECTOR_NOW.now);
    const childElem = SELECTOR_NOW.now.children[0];
    SELECTOR_NOW.now = childElem;
    elementStyle(childElem);
  }
  enabletBottomBtns(SELECTOR_NOW.now);
});
btnNextParent.addEventListener('click', function () {
  if (SELECTOR_NOW.now.length != undefined) {
    SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
  }
  if (SELECTOR_NOW.now.nextElementSibling != undefined) {
    elementUnstyle(SELECTOR_NOW.now);
    const nextElem = SELECTOR_NOW.now.nextElementSibling;
    SELECTOR_NOW.now = nextElem;
    elementStyle(nextElem);
  }
  enabletBottomBtns(SELECTOR_NOW.now);
});
btnPrevParent.addEventListener('click', function () {
  if (SELECTOR_NOW.now.length != undefined) {
    SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
  }
  if (SELECTOR_NOW.now.previousElementSibling != undefined) {
    elementUnstyle(SELECTOR_NOW.now);
    const prevElem = SELECTOR_NOW.now.previousElementSibling;
    SELECTOR_NOW.now = prevElem;
    elementStyle(prevElem);
  }
  enabletBottomBtns(SELECTOR_NOW.now);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5hN2UyNTk1MDU4OTI4YTg5OGEyNi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGJ0blNyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3ItZmluZCcpO1xuY29uc3QgYnRuTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rvci1uZXh0Jyk7XG5jb25zdCBidG5QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdG9yLXByZXYnKTtcbmNvbnN0IGJ0blBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdG9wJyk7XG5jb25zdCBidG5DaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYm90dG9tJyk7XG5jb25zdCBidG5OZXh0UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1yaWdodCcpO1xuY29uc3QgYnRuUHJldlBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGVmdCcpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3InKTtcblxuY29uc3QgU0VMRUNUT1JfTk9XID0ge307XG5mdW5jdGlvbiBlbGVtZW50U3R5bGUoZWxlbSkge1xuICBlbGVtU3R5bGUgPSBlbGVtO1xuICBlbGVtU3R5bGUuc3R5bGUub3V0bGluZSA9ICdzb2xpZCByZWQgNXB4JztcbiAgZWxlbVN0eWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnO1xufVxuZnVuY3Rpb24gZWxlbWVudFVuc3R5bGUoZWxlbSkge1xuICBlbGVtVW5zdHlsZSA9IGVsZW07XG4gIGVsZW1VbnN0eWxlLnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gIGVsZW1VbnN0eWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xufVxuZnVuY3Rpb24gZW5hYmxlTmV4dFByZXZCdG5zKCkge1xuICBpZiAoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWQgKyAxXSAhPSB1bmRlZmluZWQpIHtcbiAgICBidG5OZXh0LmRpc2FibGVkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgYnRuTmV4dC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgaWYgKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkIC0gMV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgYnRuUHJldi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGJ0blByZXYuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBlbmFibGV0Qm90dG9tQnRucyhlbGVtKSB7XG4gIGlmIChTRUxFQ1RPUl9OT1cubm93Lmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcbiAgICBidG5OZXh0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBidG5QcmV2LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoZWxlbS5wYXJlbnRFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgIGJ0blBhcmVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGJ0blBhcmVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgaWYgKGVsZW0uY2hpbGRyZW5bMF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgYnRuQ2hpbGQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBidG5DaGlsZC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgaWYgKGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nICE9IHVuZGVmaW5lZCkge1xuICAgIGJ0bk5leHRQYXJlbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBidG5OZXh0UGFyZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9IHVuZGVmaW5lZCkge1xuICAgIGJ0blByZXZQYXJlbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBidG5QcmV2UGFyZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoZWxlbSA9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpIHtcbiAgICBidG5QYXJlbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGJ0bk5leHRQYXJlbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGJ0blByZXZQYXJlbnQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG59XG5idG5TcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dC52YWx1ZSkpIHtcbiAgICBpZiAoU0VMRUNUT1JfTk9XLm5vdyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnRVbnN0eWxlKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXSk7XG4gICAgfVxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGlucHV0LnZhbHVlKTtcbiAgICBlbGVtZW50U3R5bGUoZWxlbVswXSk7XG4gICAgU0VMRUNUT1JfTk9XLm5vdyA9IGVsZW07XG4gICAgU0VMRUNUT1JfTk9XLmlkID0gMDtcbiAgICBpZiAoZWxlbVsxXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGJ0bk5leHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ0blByZXYuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbmFibGVOZXh0UHJldkJ0bnMoKTtcbiAgICBlbmFibGV0Qm90dG9tQnRucyhlbGVtWzBdKTtcbiAgfVxufSk7XG5idG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWQgKyAxXSAhPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBuZXh0RWxlbSA9IFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkICsgMV07XG4gICAgZWxlbWVudFVuc3R5bGUoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdKTtcbiAgICBTRUxFQ1RPUl9OT1cuaWQgKz0gMTtcbiAgICBlbGVtZW50U3R5bGUobmV4dEVsZW0pO1xuICAgIGVuYWJsZU5leHRQcmV2QnRucygpO1xuICAgIGVuYWJsZXRCb3R0b21CdG5zKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXSk7XG4gIH1cbn0pO1xuYnRuUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkIC0gMV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbmV4dEVsZW0gPSBTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZCAtIDFdO1xuICAgIGVsZW1lbnRVbnN0eWxlKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXSk7XG4gICAgU0VMRUNUT1JfTk9XLmlkIC09IDE7XG4gICAgZWxlbWVudFN0eWxlKG5leHRFbGVtKTtcbiAgICBlbmFibGVOZXh0UHJldkJ0bnMoKTtcbiAgICBlbmFibGV0Qm90dG9tQnRucyhTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZF0pO1xuICB9XG59KTtcblxuYnRuUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoU0VMRUNUT1JfTk9XLm5vdy5sZW5ndGggIT0gdW5kZWZpbmVkKSB7XG4gICAgU0VMRUNUT1JfTk9XLm5vdyA9IFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXTtcbiAgfVxuICBlbGVtZW50VW5zdHlsZShTRUxFQ1RPUl9OT1cubm93KTtcbiAgY29uc3QgcGFyZW50RWxlbSA9IFNFTEVDVE9SX05PVy5ub3cucGFyZW50RWxlbWVudDtcbiAgZWxlbWVudFN0eWxlKHBhcmVudEVsZW0pO1xuICBTRUxFQ1RPUl9OT1cubm93ID0gcGFyZW50RWxlbTtcbiAgZW5hYmxldEJvdHRvbUJ0bnMoU0VMRUNUT1JfTk9XLm5vdyk7XG59KTtcbmJ0bkNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoU0VMRUNUT1JfTk9XLm5vdy5sZW5ndGggIT0gdW5kZWZpbmVkKSB7XG4gICAgU0VMRUNUT1JfTk9XLm5vdyA9IFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXTtcbiAgfVxuICBpZiAoU0VMRUNUT1JfTk9XLm5vdy5jaGlsZHJlblswXSAhPSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50VW5zdHlsZShTRUxFQ1RPUl9OT1cubm93KTtcbiAgICBjb25zdCBjaGlsZEVsZW0gPSBTRUxFQ1RPUl9OT1cubm93LmNoaWxkcmVuWzBdO1xuICAgIFNFTEVDVE9SX05PVy5ub3cgPSBjaGlsZEVsZW07XG4gICAgZWxlbWVudFN0eWxlKGNoaWxkRWxlbSk7XG4gIH1cbiAgZW5hYmxldEJvdHRvbUJ0bnMoU0VMRUNUT1JfTk9XLm5vdyk7XG59KTtcbmJ0bk5leHRQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChTRUxFQ1RPUl9OT1cubm93Lmxlbmd0aCAhPSB1bmRlZmluZWQpIHtcbiAgICBTRUxFQ1RPUl9OT1cubm93ID0gU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdO1xuICB9XG4gIGlmIChTRUxFQ1RPUl9OT1cubm93Lm5leHRFbGVtZW50U2libGluZyAhPSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50VW5zdHlsZShTRUxFQ1RPUl9OT1cubm93KTtcbiAgICBjb25zdCBuZXh0RWxlbSA9IFNFTEVDVE9SX05PVy5ub3cubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIFNFTEVDVE9SX05PVy5ub3cgPSBuZXh0RWxlbTtcbiAgICBlbGVtZW50U3R5bGUobmV4dEVsZW0pO1xuICB9XG4gIGVuYWJsZXRCb3R0b21CdG5zKFNFTEVDVE9SX05PVy5ub3cpO1xufSk7XG5idG5QcmV2UGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoU0VMRUNUT1JfTk9XLm5vdy5sZW5ndGggIT0gdW5kZWZpbmVkKSB7XG4gICAgU0VMRUNUT1JfTk9XLm5vdyA9IFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXTtcbiAgfVxuICBpZiAoU0VMRUNUT1JfTk9XLm5vdy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnRVbnN0eWxlKFNFTEVDVE9SX05PVy5ub3cpO1xuICAgIGNvbnN0IHByZXZFbGVtID0gU0VMRUNUT1JfTk9XLm5vdy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIFNFTEVDVE9SX05PVy5ub3cgPSBwcmV2RWxlbTtcbiAgICBlbGVtZW50U3R5bGUocHJldkVsZW0pO1xuICB9XG4gIGVuYWJsZXRCb3R0b21CdG5zKFNFTEVDVE9SX05PVy5ub3cpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9