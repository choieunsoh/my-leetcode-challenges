// 3794. Reverse String Prefix
// https://leetcode.com/problems/reverse-string-prefix/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s, k) {
  let result = '';
  for (let i = k - 1; i >= 0; i--) {
    result += s[i];
  }
  result += s.slice(k);
  return result;
};

var s = 'abcd',
  k = 2;
var expected = 'bacd';
var result = reversePrefix(s, k);
console.log(result, result === expected);

var s = 'xyz',
  k = 3;
var expected = 'zyx';
var result = reversePrefix(s, k);
console.log(result, result === expected);

var s = 'hey',
  k = 1;
var expected = 'hey';
var result = reversePrefix(s, k);
console.log(result, result === expected);
