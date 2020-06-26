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

let btnSrch = document.querySelector('.selector-find');
let btnNext = document.querySelector('.selector-next');
let btnPrev = document.querySelector('.selector-prev');
let btnParent = document.querySelector('.nav-top');
let btnChild = document.querySelector('.nav-bottom'); 
let btnNextParent = document.querySelector('.nav-right');
let btnPrevParent = document.querySelector('.nav-left');
let input = document.querySelector('.selector');

let SELECTOR_NOW = {};
function elementStyle(elem) {
    elem.style.outline = 'solid red 5px';
    elem.style.backgroundColor = 'lightblue';
}
function elementUnstyle(el) {
    el.style.outline = 'none';
    el.style.backgroundColor = '';
}
function enableNextPrevBtns(el) {
    if(SELECTOR_NOW.now[SELECTOR_NOW.id + 1] !== undefined) {
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
    if(SELECTOR_NOW.now.length===undefined) {
        btnNext.disabled = true;
        btnPrev.disabled = true;
    }
    if(elem.parentElement !== undefined) {
        btnParent.disabled = false;
    } else {
        btnParent.disabled = true;
    }
    if(elem.children[0] !== undefined) {
        btnChild.disabled = false;
    } else {
        btnChild.disabled = true;
    }
    if(elem.nextElementSibling !== undefined) {
        btnNextParent.disabled = false;
    } else {
        btnNextParent.disabled = true;
    }
    if(elem.previousElementSibling !== undefined) {
        btnPrevParent.disabled = false;
    } else {
        btnPrevParent.disabled = true;
    }
    if (elem===document.querySelector('body')) {
        btnParent.disabled = true;
        btnNextParent.disabled = true;
        btnPrevParent.disabled = true;
    }
}
btnSrch.addEventListener("click", function(e) {
    if(document.querySelector(input.value)) {
        if(SELECTOR_NOW.now !== undefined) {
            elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
        };
        let elem = document.querySelectorAll(input.value);
        elementStyle(elem[0]);
        SELECTOR_NOW.now = elem;
        SELECTOR_NOW.id = 0;
        if(elem[1] !== undefined) {
            btnNext.disabled = false;
            btnPrev.disabled = true;
        }
        enableNextPrevBtns();
        enabletBottomBtns(elem[0]);
    }
});
btnNext.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now[SELECTOR_NOW.id + 1] !== undefined) {
        let nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id + 1];
        elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
        SELECTOR_NOW.id = SELECTOR_NOW.id + 1;
        elementStyle(nextElem);
        enableNextPrevBtns();
        enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    }
});
btnPrev.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now[SELECTOR_NOW.id - 1] !== undefined) {
        let nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id - 1];
        elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
        SELECTOR_NOW.id = SELECTOR_NOW.id - 1;
        elementStyle(nextElem);
        enableNextPrevBtns();
        enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    }
});

btnParent.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now.length !== undefined) {
        SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
    }
    elementUnstyle(SELECTOR_NOW.now);
    let parentElem = SELECTOR_NOW.now.parentElement;
    elementStyle(parentElem);   
    SELECTOR_NOW.now = parentElem;
    enabletBottomBtns(SELECTOR_NOW.now);

});
btnChild.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now.length !== undefined) {
        SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
    }
    if(SELECTOR_NOW.now.children[0] !== undefined) {
        elementUnstyle(SELECTOR_NOW.now);
        let childElem = SELECTOR_NOW.now.children[0];
        SELECTOR_NOW.now = childElem;
        elementStyle(childElem);
    }
    enabletBottomBtns(SELECTOR_NOW.now);
});
btnNextParent.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now.length !== undefined) {
        SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
    }
    if(SELECTOR_NOW.now.nextElementSibling !== undefined) {
        elementUnstyle(SELECTOR_NOW.now);
        let nextElem = SELECTOR_NOW.now.nextElementSibling;
        SELECTOR_NOW.now = nextElem;
        elementStyle(nextElem);
    }
    enabletBottomBtns(SELECTOR_NOW.now);
})
btnPrevParent.addEventListener('click', function(e) {
    if(SELECTOR_NOW.now.length !== undefined) {
        SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
    }
    if(SELECTOR_NOW.now.previousElementSibling !== undefined) {
        elementUnstyle(SELECTOR_NOW.now);
        let prevElem = SELECTOR_NOW.now.previousElementSibling;
        SELECTOR_NOW.now = prevElem;
        elementStyle(prevElem);
    }
    enabletBottomBtns(SELECTOR_NOW.now);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEs7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QjtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6Im1haW4uYWIyNTI4ZWFkMDJjYmMwODQ5ZjIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJsZXQgYnRuU3JjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rvci1maW5kJyk7XG5sZXQgYnRuTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rvci1uZXh0Jyk7XG5sZXQgYnRuUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rvci1wcmV2Jyk7XG5sZXQgYnRuUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi10b3AnKTtcbmxldCBidG5DaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYm90dG9tJyk7IFxubGV0IGJ0bk5leHRQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXJpZ2h0Jyk7XG5sZXQgYnRuUHJldlBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGVmdCcpO1xubGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdG9yJyk7XG5cbmxldCBTRUxFQ1RPUl9OT1cgPSB7fTtcbmZ1bmN0aW9uIGVsZW1lbnRTdHlsZShlbGVtKSB7XG4gICAgZWxlbS5zdHlsZS5vdXRsaW5lID0gJ3NvbGlkIHJlZCA1cHgnO1xuICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Ymx1ZSc7XG59XG5mdW5jdGlvbiBlbGVtZW50VW5zdHlsZShlbCkge1xuICAgIGVsLnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG59XG5mdW5jdGlvbiBlbmFibGVOZXh0UHJldkJ0bnMoZWwpIHtcbiAgICBpZihTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZCArIDFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnRuTmV4dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bk5leHQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gXG4gICAgaWYgKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkIC0gMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBidG5QcmV2LmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuUHJldi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxufVxuZnVuY3Rpb24gZW5hYmxldEJvdHRvbUJ0bnMoZWxlbSkge1xuICAgIGlmKFNFTEVDVE9SX05PVy5ub3cubGVuZ3RoPT09dW5kZWZpbmVkKSB7XG4gICAgICAgIGJ0bk5leHQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBidG5QcmV2LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZWxlbS5wYXJlbnRFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnRuUGFyZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuUGFyZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZWxlbS5jaGlsZHJlblswXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJ0bkNoaWxkLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuQ2hpbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZihlbGVtLm5leHRFbGVtZW50U2libGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJ0bk5leHRQYXJlbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG5OZXh0UGFyZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnRuUHJldlBhcmVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0blByZXZQYXJlbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZWxlbT09PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSkge1xuICAgICAgICBidG5QYXJlbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBidG5OZXh0UGFyZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYnRuUHJldlBhcmVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxufVxuYnRuU3JjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5wdXQudmFsdWUpKSB7XG4gICAgICAgIGlmKFNFTEVDVE9SX05PVy5ub3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudFVuc3R5bGUoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGlucHV0LnZhbHVlKTtcbiAgICAgICAgZWxlbWVudFN0eWxlKGVsZW1bMF0pO1xuICAgICAgICBTRUxFQ1RPUl9OT1cubm93ID0gZWxlbTtcbiAgICAgICAgU0VMRUNUT1JfTk9XLmlkID0gMDtcbiAgICAgICAgaWYoZWxlbVsxXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBidG5OZXh0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBidG5QcmV2LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbmFibGVOZXh0UHJldkJ0bnMoKTtcbiAgICAgICAgZW5hYmxldEJvdHRvbUJ0bnMoZWxlbVswXSk7XG4gICAgfVxufSk7XG5idG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkICsgMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgbmV4dEVsZW0gPSBTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZCArIDFdO1xuICAgICAgICBlbGVtZW50VW5zdHlsZShTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZF0pO1xuICAgICAgICBTRUxFQ1RPUl9OT1cuaWQgPSBTRUxFQ1RPUl9OT1cuaWQgKyAxO1xuICAgICAgICBlbGVtZW50U3R5bGUobmV4dEVsZW0pO1xuICAgICAgICBlbmFibGVOZXh0UHJldkJ0bnMoKTtcbiAgICAgICAgZW5hYmxldEJvdHRvbUJ0bnMoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdKTtcbiAgICB9XG59KTtcbmJ0blByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWQgLSAxXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBuZXh0RWxlbSA9IFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkIC0gMV07XG4gICAgICAgIGVsZW1lbnRVbnN0eWxlKFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXSk7XG4gICAgICAgIFNFTEVDVE9SX05PVy5pZCA9IFNFTEVDVE9SX05PVy5pZCAtIDE7XG4gICAgICAgIGVsZW1lbnRTdHlsZShuZXh0RWxlbSk7XG4gICAgICAgIGVuYWJsZU5leHRQcmV2QnRucygpO1xuICAgICAgICBlbmFibGV0Qm90dG9tQnRucyhTRUxFQ1RPUl9OT1cubm93W1NFTEVDVE9SX05PVy5pZF0pO1xuICAgIH1cbn0pO1xuXG5idG5QYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoU0VMRUNUT1JfTk9XLm5vdy5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBTRUxFQ1RPUl9OT1cubm93ID0gU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdO1xuICAgIH1cbiAgICBlbGVtZW50VW5zdHlsZShTRUxFQ1RPUl9OT1cubm93KTtcbiAgICBsZXQgcGFyZW50RWxlbSA9IFNFTEVDVE9SX05PVy5ub3cucGFyZW50RWxlbWVudDtcbiAgICBlbGVtZW50U3R5bGUocGFyZW50RWxlbSk7ICAgXG4gICAgU0VMRUNUT1JfTk9XLm5vdyA9IHBhcmVudEVsZW07XG4gICAgZW5hYmxldEJvdHRvbUJ0bnMoU0VMRUNUT1JfTk9XLm5vdyk7XG5cbn0pO1xuYnRuQ2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoU0VMRUNUT1JfTk9XLm5vdy5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBTRUxFQ1RPUl9OT1cubm93ID0gU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdO1xuICAgIH1cbiAgICBpZihTRUxFQ1RPUl9OT1cubm93LmNoaWxkcmVuWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZWxlbWVudFVuc3R5bGUoU0VMRUNUT1JfTk9XLm5vdyk7XG4gICAgICAgIGxldCBjaGlsZEVsZW0gPSBTRUxFQ1RPUl9OT1cubm93LmNoaWxkcmVuWzBdO1xuICAgICAgICBTRUxFQ1RPUl9OT1cubm93ID0gY2hpbGRFbGVtO1xuICAgICAgICBlbGVtZW50U3R5bGUoY2hpbGRFbGVtKTtcbiAgICB9XG4gICAgZW5hYmxldEJvdHRvbUJ0bnMoU0VMRUNUT1JfTk9XLm5vdyk7XG59KTtcbmJ0bk5leHRQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoU0VMRUNUT1JfTk9XLm5vdy5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBTRUxFQ1RPUl9OT1cubm93ID0gU0VMRUNUT1JfTk9XLm5vd1tTRUxFQ1RPUl9OT1cuaWRdO1xuICAgIH1cbiAgICBpZihTRUxFQ1RPUl9OT1cubm93Lm5leHRFbGVtZW50U2libGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVsZW1lbnRVbnN0eWxlKFNFTEVDVE9SX05PVy5ub3cpO1xuICAgICAgICBsZXQgbmV4dEVsZW0gPSBTRUxFQ1RPUl9OT1cubm93Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgU0VMRUNUT1JfTk9XLm5vdyA9IG5leHRFbGVtO1xuICAgICAgICBlbGVtZW50U3R5bGUobmV4dEVsZW0pO1xuICAgIH1cbiAgICBlbmFibGV0Qm90dG9tQnRucyhTRUxFQ1RPUl9OT1cubm93KTtcbn0pXG5idG5QcmV2UGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKFNFTEVDVE9SX05PVy5ub3cubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgU0VMRUNUT1JfTk9XLm5vdyA9IFNFTEVDVE9SX05PVy5ub3dbU0VMRUNUT1JfTk9XLmlkXTtcbiAgICB9XG4gICAgaWYoU0VMRUNUT1JfTk9XLm5vdy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZWxlbWVudFVuc3R5bGUoU0VMRUNUT1JfTk9XLm5vdyk7XG4gICAgICAgIGxldCBwcmV2RWxlbSA9IFNFTEVDVE9SX05PVy5ub3cucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgU0VMRUNUT1JfTk9XLm5vdyA9IHByZXZFbGVtO1xuICAgICAgICBlbGVtZW50U3R5bGUocHJldkVsZW0pO1xuICAgIH1cbiAgICBlbmFibGV0Qm90dG9tQnRucyhTRUxFQ1RPUl9OT1cubm93KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=