// https://leetcode.com/problems/backspace-string-compare/
// 844. Backspace String Compare
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sStack = [];
  for (const c of s) {
    if (c !== '#') {
      sStack.push(c);
    } else {
      sStack.pop();
    }
  }
  const tStack = [];
  for (const c of t) {
    if (c !== '#') {
      tStack.push(c);
    } else {
      tStack.pop();
    }
  }

  return sStack.join() === tStack.join();
};

var s = 'ab#c',
  t = 'ad#c';
var expected = true;
var result = backspaceCompare(s, t);
console.log(result, result === expected);

var s = 'ab##',
  t = 'c#d#';
var expected = true;
var result = backspaceCompare(s, t);
console.log(result, result === expected);

var s = 'a#c',
  t = 'b';
var expected = false;
var result = backspaceCompare(s, t);
console.log(result, result === expected);
