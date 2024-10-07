// 2696. Minimum String Length After Removing Substrings
// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [];
  for (const ch of s) {
    if (isAB(ch) || isCD(ch)) {
      stack.pop(ch);
      continue;
    }
    stack.push(ch);
  }
  return stack.length;

  function isAB(ch) {
    return isValid(ch, 'A', 'B');
  }

  function isCD(ch) {
    return isValid(ch, 'C', 'D');
  }

  function isValid(ch, first, second) {
    return ch === second && stack.length > 0 && stack.at(-1) === first;
  }
};

var s = 'ABFCACDB';
var expected = 2;
var result = minLength(s);
console.log(result, result === expected);

var s = 'ACBBD';
var expected = 5;
var result = minLength(s);
console.log(result, result === expected);
