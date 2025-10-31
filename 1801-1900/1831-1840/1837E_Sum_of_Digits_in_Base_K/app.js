// 1837. Sum of Digits in Base K
// https://leetcode.com/problems/sum-of-digits-in-base-k/
// T.C.: O(log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  return n
    .toString(k)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
};

var n = 34,
  k = 6;
var expected = 9;
var result = sumBase(n, k);
console.log(result, result === expected);

var n = 10,
  k = 10;
var expected = 1;
var result = sumBase(n, k);
console.log(result, result === expected);
