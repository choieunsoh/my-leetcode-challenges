// 1317. Convert Integer to the Sum of Two No-Zero Integers
// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (let a = 1; a < n; a++) {
    if (hasZeroNumber(a)) continue;

    const b = n - a;
    if (!hasZeroNumber(b)) {
      return [a, b];
    }
  }
  return [];

  function hasZeroNumber(n) {
    while (n > 0) {
      if (n % 10 === 0) return true;
      n = (n / 10) | 0;
    }
    return false;
  }
};

var n = 2;
var expected = [1, 1];
var result = getNoZeroIntegers(n);
console.log(result, result.join() === expected.join());

var n = 11;
var expected = [2, 9];
var result = getNoZeroIntegers(n);
console.log(result, result.join() === expected.join());
