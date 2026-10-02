// 3827. Count Monobit Integers
// https://leetcode.com/problems/count-monobit-integers/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function (n) {
  return Math.floor(Math.log2(n + 1)) + 1;
};

var n = 1;
var expected = 2;
var result = countMonobit(n);
console.log(result, result === expected);

var n = 4;
var expected = 3;
var result = countMonobit(n);
console.log(result, result === expected);
