/* eslint eqeqeq: 0 */
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
  const ElVar = elem;
  ElVar.style.outline = 'solid red 5px';
  ElVar.style.backgroundColor = 'lightblue';
}
function elementUnstyle(elem) {
  const ElVar = elem;
  ElVar.style.outline = 'none';
  ElVar.style.backgroundColor = '';
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
  if (SELECTOR_NOW.now.length === undefined) {
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
  if (elem === document.querySelector('body')) {
    btnParent.disabled = true;
    btnNextParent.disabled = true;
    btnPrevParent.disabled = true;
  }
}
btnSrch.addEventListener('click', function srchHandler() {
  if (input.value != '' && input.value != undefined) {
    if (document.querySelector(input.value)) {
      if (SELECTOR_NOW.now != undefined) {
        elementUnstyle(SELECTOR_NOW.now);
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
  }
});
btnNext.addEventListener('click', function nextHandler() {
  if (SELECTOR_NOW.now[SELECTOR_NOW.id + 1] != undefined) {
    const nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id + 1];
    elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    SELECTOR_NOW.id += 1;
    elementStyle(nextElem);
    enableNextPrevBtns();
    enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
  }
});
btnPrev.addEventListener('click', function prevHandler() {
  if (SELECTOR_NOW.now[SELECTOR_NOW.id - 1] != undefined) {
    const nextElem = SELECTOR_NOW.now[SELECTOR_NOW.id - 1];
    elementUnstyle(SELECTOR_NOW.now[SELECTOR_NOW.id]);
    SELECTOR_NOW.id -= 1;
    elementStyle(nextElem);
    enableNextPrevBtns();
    enabletBottomBtns(SELECTOR_NOW.now[SELECTOR_NOW.id]);
  }
});

btnParent.addEventListener('click', function parentHandler() {
  if (SELECTOR_NOW.now.length != undefined) {
    SELECTOR_NOW.now = SELECTOR_NOW.now[SELECTOR_NOW.id];
  }
  elementUnstyle(SELECTOR_NOW.now);
  const parentElem = SELECTOR_NOW.now.parentElement;
  elementStyle(parentElem);
  SELECTOR_NOW.now = parentElem;
  enabletBottomBtns(SELECTOR_NOW.now);
});
btnChild.addEventListener('click', function childHandler() {
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
btnNextParent.addEventListener('click', function nextparentHandler() {
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
btnPrevParent.addEventListener('click', function prevParentHandler() {
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
