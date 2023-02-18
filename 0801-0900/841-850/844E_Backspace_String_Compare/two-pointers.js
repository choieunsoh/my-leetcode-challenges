// 844. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let skipS = 0;
  let skipT = 0;
  let i = s.length - 1;
  let j = t.length - 1;
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }

    while (j >= 0) {
      if (t[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }

    if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
    if (i >= 0 !== j >= 0) return false;
    i--;
    j--;
  }
  return true;
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
