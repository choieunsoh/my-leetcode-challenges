// 2413. Smallest Even Multiple
// https://leetcode.com/problems/smallest-even-multiple/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  return n % 2 === 0 ? n : n * 2;
};

var n = 5;
var expected = 10;
var result = smallestEvenMultiple(n);
console.log(result, result === expected);

var n = 6;
var expected = 6;
var result = smallestEvenMultiple(n);
console.log(result, result === expected);
