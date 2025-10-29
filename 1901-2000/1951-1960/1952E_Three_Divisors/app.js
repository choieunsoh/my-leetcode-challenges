// 1952. Three Divisors
// https://leetcode.com/problems/three-divisors/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let count = 0;
  for (let num = 1; num <= n; num++) {
    if (n % num === 0) count++;
    if (count > 3) return false;
  }
  return count === 3;
};

var n = 2;
var expected = false;
var result = isThree(n);
console.log(result, result === expected);

var n = 4;
var expected = true;
var result = isThree(n);
console.log(result, result === expected);

var n = 12;
var expected = false;
var result = isThree(n);
console.log(result, result === expected);
