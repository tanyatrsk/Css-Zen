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
  elem.style.outline = 'solid red 5px';
  elem.style.backgroundColor = 'lightblue';
}
function elementUnstyle(el) {
  el.style.outline = 'none';
  el.style.backgroundColor = '';
}
function enableNextPrevBtns() {
  if (SELECTOR_NOW.now[SELECTOR_NOW.id + 1] !== undefined) {
    btnNext.disabled = false;
  } else {
    btnNext.disabled = true;
  }
  if (SELECTOR_NOW.now[SELECTOR_NOW.id - 1] !== undefined) {
    btnPrev.disabled = false;
  } else {
    btnPrev.disabled = true;
  }
}
function enabletBottomBtns(elem) {
  if (SELECTOR_NOW.now.length === undefined) {
    btnNext.disabled = true;
    btnPrev.disabled = true;
  }
  if (elem.parentElement !== undefined) {
    btnParent.disabled = false;
  } else {
    btnParent.disabled = true;
  }
  if (elem.children[0] !== undefined) {
    btnChild.disabled = false;
  } else {
    btnChild.disabled = true;
  }
  if (elem.nextElementSibling !== undefined) {
    btnNextParent.disabled = false;
  } else {
    btnNextParent.disabled = true;
  }
  if (elem.previousElementSibling !== undefined) {
    btnPrevParent.disabled = false;
  } else {
    btnPrevParent.disabled = true;
  }
  if (elem === document.querySelector('body')) {
    btnParent.disabled = true;
    btnNextParent.disabled = true;
    btnPrevParent.disabled = true;
  }
}
btnSrch.addEventListener('click', function srchHandler() {
  if (document.querySelector(input.value)) {
    if (SELECTOR_NOW.now !== undefined) {
      elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    }
    const elem = document.querySelectorAll(input.value);
    elementStyle(elem[0]);
    SELECTOR_NOW.now = elem;
    SELECTOR_NOW.id = 0;
    if (elem[1] !== undefined) {
      btnNext.disabled = false;
      btnPrev.disabled = true;
    }
    enableNextPrevBtns();
    enabletBottomBtns(elem[0]);
  }
});
btnNext.addEventListener('click', function nextHandler() {
  if (SELECTOR_NOW.now[SELECTOR_NOW.id + 1] !== undefined) {
    const nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id + 1];
    elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    SELECTOR_NOW.id += 1;
    elementStyle(nextElem);
    enableNextPrevBtns();
    enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
  }
});
btnPrev.addEventListener('click', function prevHandler() {
  if (SELECTOR_NOW.now[SELECTOR_NOW.id - 1] !== undefined) {
    const nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id - 1];
    elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    SELECTOR_NOW.id -= 1;
    elementStyle(nextElem);
    enableNextPrevBtns();
    enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
  }
});

btnParent.addEventListener('click', function parentHandler() {
  if (SELECTOR_NOW.now.length !== undefined) {
    SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
  }
  elementUnstyle(SELECTOR_NOW.now);
  const parentElem = SELECTOR_NOW.now.parentElement;
  elementStyle(parentElem);
  SELECTOR_NOW.now = parentElem;
  enabletBottomBtns(SELECTOR_NOW.now);
});
btnChild.addEventListener('click', function childHandler() {
  if (SELECTOR_NOW.now.length !== undefined) {
    SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
  }
  if (SELECTOR_NOW.now.children[0] !== undefined) {
    elementUnstyle(SELECTOR_NOW.now);
    const childElem = SELECTOR_NOW.now.children[0];
    SELECTOR_NOW.now = childElem;
    elementStyle(childElem);
  }
  enabletBottomBtns(SELECTOR_NOW.now);
});
btnNextParent.addEventListener('click', function nextParentHandler() {
  if (SELECTOR_NOW.now.length !== undefined) {
    SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
  }
  if (SELECTOR_NOW.now.nextElementSibling !== undefined) {
    elementUnstyle(SELECTOR_NOW.now);
    const nextElem = SELECTOR_NOW.now.nextElementSibling;
    SELECTOR_NOW.now = nextElem;
    elementStyle(nextElem);
  }
  enabletBottomBtns(SELECTOR_NOW.now);
});
btnPrevParent.addEventListener('click', function prevParentHandler() {
  if (SELECTOR_NOW.now.length !== undefined) {
    SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
  }
  if (SELECTOR_NOW.now.previousElementSibling !== undefined) {
    elementUnstyle(SELECTOR_NOW.now);
    const prevElem = SELECTOR_NOW.now.previousElementSibling;
    SELECTOR_NOW.now = prevElem;
    elementStyle(prevElem);
  }
  enabletBottomBtns(SELECTOR_NOW.now);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmNiYmZiYzRjODMzY2RjYzhlMGUxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgYnRuU3JjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rvci1maW5kJyk7XG5jb25zdCBidG5OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdG9yLW5leHQnKTtcbmNvbnN0IGJ0blByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3ItcHJldicpO1xuY29uc3QgYnRuUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi10b3AnKTtcbmNvbnN0IGJ0bkNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1ib3R0b20nKTtcbmNvbnN0IGJ0bk5leHRQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXJpZ2h0Jyk7XG5jb25zdCBidG5QcmV2UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1sZWZ0Jyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcicpO1xuXG5jb25zdCBTRUxFQ1RPUl9OT1cgPSB7fTtcbmZ1bmN0aW9uIGVsZW1lbnRTdHlsZShlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3V0bGluZSA9ICdzb2xpZCByZWQgNXB4JztcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRibHVlJztcbn1cbmZ1bmN0aW9uIGVsZW1lbnRVbnN0eWxlKGVsKSB7XG4gIGVsLnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xufVxuZnVuY3Rpb24gZW5hYmxlTmV4dFByZXZCdG5zKCkge1xuICBpZiAoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWQgKyAxXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYnRuTmV4dC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGJ0bk5leHQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIGlmIChTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZCAtIDFdICE9PSB1bmRlZmluZWQpIHtcbiAgICBidG5QcmV2LmRpc2FibGVkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgYnRuUHJldi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGVuYWJsZXRCb3R0b21CdG5zKGVsZW0pIHtcbiAgaWYgKFNFTEVDVE9SX05PVy5ub3cubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidG5OZXh0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBidG5QcmV2LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoZWxlbS5wYXJlbnRFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBidG5QYXJlbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBidG5QYXJlbnQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIGlmIChlbGVtLmNoaWxkcmVuWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICBidG5DaGlsZC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGJ0bkNoaWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoZWxlbS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ0bk5leHRQYXJlbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBidG5OZXh0UGFyZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBidG5QcmV2UGFyZW50LmRpc2FibGVkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgYnRuUHJldlBhcmVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgaWYgKGVsZW0gPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSkge1xuICAgIGJ0blBhcmVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgYnRuTmV4dFBhcmVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgYnRuUHJldlBhcmVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbn1cbmJ0blNyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBzcmNoSGFuZGxlcigpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5wdXQudmFsdWUpKSB7XG4gICAgaWYgKFNFTEVDVE9SX05PVy5ub3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbWVudFVuc3R5bGUoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdKTtcbiAgICB9XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW5wdXQudmFsdWUpO1xuICAgIGVsZW1lbnRTdHlsZShlbGVtWzBdKTtcbiAgICBTRUxFQ1RPUl9OT1cubm93ID0gZWxlbTtcbiAgICBTRUxFQ1RPUl9OT1cuaWQgPSAwO1xuICAgIGlmIChlbGVtWzFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGJ0bk5leHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ0blByZXYuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbmFibGVOZXh0UHJldkJ0bnMoKTtcbiAgICBlbmFibGV0Qm90dG9tQnRucyhlbGVtWzBdKTtcbiAgfVxufSk7XG5idG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gbmV4dEhhbmRsZXIoKSB7XG4gIGlmIChTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZCArIDFdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBuZXh0RWxlbSA9IFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkICsgMV07XG4gICAgZWxlbWVudFVuc3R5bGUoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdKTtcbiAgICBTRUxFQ1RPUl9OT1cuaWQgKz0gMTtcbiAgICBlbGVtZW50U3R5bGUobmV4dEVsZW0pO1xuICAgIGVuYWJsZU5leHRQcmV2QnRucygpO1xuICAgIGVuYWJsZXRCb3R0b21CdG5zKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXSk7XG4gIH1cbn0pO1xuYnRuUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHByZXZIYW5kbGVyKCkge1xuICBpZiAoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWQgLSAxXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbmV4dEVsZW0gPSBTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZCAtIDFdO1xuICAgIGVsZW1lbnRVbnN0eWxlKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXSk7XG4gICAgU0VMRUNUT1JfTk9XLmlkIC09IDE7XG4gICAgZWxlbWVudFN0eWxlKG5leHRFbGVtKTtcbiAgICBlbmFibGVOZXh0UHJldkJ0bnMoKTtcbiAgICBlbmFibGV0Qm90dG9tQnRucyhTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZF0pO1xuICB9XG59KTtcblxuYnRuUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gcGFyZW50SGFuZGxlcigpIHtcbiAgaWYgKFNFTEVDVE9SX05PVy5ub3cubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICBTRUxFQ1RPUl9OT1cubm93ID0gU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdO1xuICB9XG4gIGVsZW1lbnRVbnN0eWxlKFNFTEVDVE9SX05PVy5ub3cpO1xuICBjb25zdCBwYXJlbnRFbGVtID0gU0VMRUNUT1JfTk9XLm5vdy5wYXJlbnRFbGVtZW50O1xuICBlbGVtZW50U3R5bGUocGFyZW50RWxlbSk7XG4gIFNFTEVDVE9SX05PVy5ub3cgPSBwYXJlbnRFbGVtO1xuICBlbmFibGV0Qm90dG9tQnRucyhTRUxFQ1RPUl9OT1cubm93KTtcbn0pO1xuYnRuQ2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjaGlsZEhhbmRsZXIoKSB7XG4gIGlmIChTRUxFQ1RPUl9OT1cubm93Lmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgU0VMRUNUT1JfTk9XLm5vdyA9IFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXTtcbiAgfVxuICBpZiAoU0VMRUNUT1JfTk9XLm5vdy5jaGlsZHJlblswXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudFVuc3R5bGUoU0VMRUNUT1JfTk9XLm5vdyk7XG4gICAgY29uc3QgY2hpbGRFbGVtID0gU0VMRUNUT1JfTk9XLm5vdy5jaGlsZHJlblswXTtcbiAgICBTRUxFQ1RPUl9OT1cubm93ID0gY2hpbGRFbGVtO1xuICAgIGVsZW1lbnRTdHlsZShjaGlsZEVsZW0pO1xuICB9XG4gIGVuYWJsZXRCb3R0b21CdG5zKFNFTEVDVE9SX05PVy5ub3cpO1xufSk7XG5idG5OZXh0UGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gbmV4dFBhcmVudEhhbmRsZXIoKSB7XG4gIGlmIChTRUxFQ1RPUl9OT1cubm93Lmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgU0VMRUNUT1JfTk9XLm5vdyA9IFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXTtcbiAgfVxuICBpZiAoU0VMRUNUT1JfTk9XLm5vdy5uZXh0RWxlbWVudFNpYmxpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnRVbnN0eWxlKFNFTEVDVE9SX05PVy5ub3cpO1xuICAgIGNvbnN0IG5leHRFbGVtID0gU0VMRUNUT1JfTk9XLm5vdy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgU0VMRUNUT1JfTk9XLm5vdyA9IG5leHRFbGVtO1xuICAgIGVsZW1lbnRTdHlsZShuZXh0RWxlbSk7XG4gIH1cbiAgZW5hYmxldEJvdHRvbUJ0bnMoU0VMRUNUT1JfTk9XLm5vdyk7XG59KTtcbmJ0blByZXZQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBwcmV2UGFyZW50SGFuZGxlcigpIHtcbiAgaWYgKFNFTEVDVE9SX05PVy5ub3cubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICBTRUxFQ1RPUl9OT1cubm93ID0gU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdO1xuICB9XG4gIGlmIChTRUxFQ1RPUl9OT1cubm93LnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnRVbnN0eWxlKFNFTEVDVE9SX05PVy5ub3cpO1xuICAgIGNvbnN0IHByZXZFbGVtID0gU0VMRUNUT1JfTk9XLm5vdy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIFNFTEVDVE9SX05PVy5ub3cgPSBwcmV2RWxlbTtcbiAgICBlbGVtZW50U3R5bGUocHJldkVsZW0pO1xuICB9XG4gIGVuYWJsZXRCb3R0b21CdG5zKFNFTEVDVE9SX05PVy5ub3cpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9