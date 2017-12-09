/**
 * Utility functions to get a pixel distance from left/top of the window.
 */

export function getLeft(initialElem) {
  let pt = 0;
  let elem = initialElem;
  while (elem.offsetParent) {
    pt += elem.offsetLeft;
    elem = elem.offsetParent;
  }
  return pt;
}

export function getTop(initialElem) {
  let pt = 0;
  let elem = initialElem;
  while (elem.offsetParent) {
    pt += elem.offsetTop;
    elem = elem.offsetParent;
  }
  return pt;
}
