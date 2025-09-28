// 263. Ugly Number
// https://leetcode.com/problems/ugly-number/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;
  return n === 1;
};

var n = 6;
var expected = true;
var result = isUgly(n);
console.log(result, result === expected);

var n = 1;
var expected = true;
var result = isUgly(n);
console.log(result, result === expected);

var n = 14;
var expected = false;
var result = isUgly(n);
console.log(result, result === expected);
