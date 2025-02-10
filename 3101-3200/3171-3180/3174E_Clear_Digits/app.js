// 3174. Clear Digits
// https://leetcode.com/problems/clear-digits/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const stack = [];
  for (const ch of s) {
    if (isDigit(ch)) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join('');

  function isDigit(ch) {
    return ch >= '0' && ch <= '9';
  }
};

var s = 'abc';
var expected = 'abc';
var result = clearDigits(s);
console.log(result, result === expected);

var s = 'cb34';
var expected = '';
var result = clearDigits(s);
console.log(result, result === expected);
