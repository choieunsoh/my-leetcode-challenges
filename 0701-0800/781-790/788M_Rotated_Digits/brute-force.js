// 788. Rotated Digits
// https://leetcode.com/problems/rotated-digits/description/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (good(i, false)) result++;
  }
  return result;

  function good(n, flag) {
    if (n === 0) return flag;

    const d = n % 10;
    if (d === 3 || d === 4 || d === 7) return false;
    if (d === 0 || d === 1 || d === 8) return good((n / 10) | 0, flag);
    return good((n / 10) | 0, true);
  }
};

var n = 10;
var expected = 4;
var result = rotatedDigits(n);
console.log(result, result === expected);

var n = 1;
var expected = 0;
var result = rotatedDigits(n);
console.log(result, result === expected);

var n = 2;
var expected = 1;
var result = rotatedDigits(n);
console.log(result, result === expected);
