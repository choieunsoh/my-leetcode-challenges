// 1933. Check if String Is Decomposable Into Value-Equal Substrings
// https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var isDecomposable = function (s) {
  let prev = s[0];
  let count = 1;
  let foundLengthTwo = false;
  for (let i = 1; i <= s.length; i++) {
    if (prev === s[i]) {
      count++;
    } else {
      console.log(s[i], count);
      if (count === 1) return false;
      if (count === 2) {
        if (foundLengthTwo) return false;
        foundLengthTwo = true;
      } else {
        if (count % 3 !== 0) {
          if (foundLengthTwo) return false;
          foundLengthTwo = true;
          count -= 2;
          if (count % 3 !== 0) return false;
        }
      }

      prev = s[i];
      count = 1;
    }
  }
  return foundLengthTwo;
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
