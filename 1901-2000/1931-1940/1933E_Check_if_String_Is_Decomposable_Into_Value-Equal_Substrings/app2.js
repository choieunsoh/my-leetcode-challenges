// 1933. Check if String Is Decomposable Into Value-Equal Substrings
// https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var isDecomposable = function (s) {
  const n = s.length;
  let foundTwo = false;
  let i = 0;
  while (i < n) {
    let j = i;
    while (j < n && s[j] === s[i]) j++;

    const len = j - i;
    if (len % 3 === 0) {
      // OK, all chunks of 3
    } else if (len % 3 === 2) {
      if (foundTwo) return false;
      foundTwo = true;
    } else {
      // len % 3 === 1 → invalid (e.g., 1, 4, 7...)
      return false;
    }

    i = j;
  }
  return foundTwo;
};

var s = '000111000';
var expected = false;
var result = isDecomposable(s);
console.log(result, result === expected);

var s = '00011111222';
var expected = true;
var result = isDecomposable(s);
console.log(result, result === expected);

var s = '011100022233';
var expected = false;
var result = isDecomposable(s);
console.log(result, result === expected);

var s = '000111111222';
var expected = false;
var result = isDecomposable(s);
console.log(result, result === expected);

var s = '0001111111222';
var expected = false;
var result = isDecomposable(s);
console.log(result, result === expected);

var s = '0011222';
var expected = false;
var result = isDecomposable(s);
console.log(result, result === expected);

var s = '00111111222';
var expected = true;
var result = isDecomposable(s);
console.log(result, result === expected);

var s = '66666666666677722';
var expected = true;
var result = isDecomposable(s);
console.log(result, result === expected);
