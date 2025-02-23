// 3461. Check If Digits Are Equal in String After Operations I
// https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  while (s.length > 2) {
    let next = '';
    for (let i = 1; i < s.length; i++) {
      const first = Number(s[i - 1]);
      const second = Number(s[i]);
      next += String((first + second) % 10);
    }
    s = next;
  }
  return s[0] === s[1];
};

var s = '3902';
var expected = true;
var result = hasSameDigits(s);
console.log(result, result === expected);

var s = '34789';
var expected = false;
var result = hasSameDigits(s);
console.log(result, result === expected);

var s = '34785';
var expected = true;
var result = hasSameDigits(s);
console.log(result, result === expected);
