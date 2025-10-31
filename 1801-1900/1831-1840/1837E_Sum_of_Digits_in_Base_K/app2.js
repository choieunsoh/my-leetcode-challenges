// 1837. Sum of Digits in Base K
// https://leetcode.com/problems/sum-of-digits-in-base-k/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let sum = 0;
  while (n > 0) {
    sum += n % k;
    n = (n / k) | 0;
  }
  return sum;
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
