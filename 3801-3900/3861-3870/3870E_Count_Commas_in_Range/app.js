// 3870. Count Commas in Range
// https://leetcode.com/problems/count-commas-in-range/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  return Math.max(0, n - 999);
};

var n = 1002;
var expected = 3;
var result = countCommas(n);
console.log(result, result === expected);

var n = 998;
var expected = 0;
var result = countCommas(n);
console.log(result, result === expected);

var n = 9999;
var expected = 0;
var result = countCommas(n);
console.log(result, result === expected);

var n = 10000;
var expected = 0;
var result = countCommas(n);
console.log(result, result === expected);
