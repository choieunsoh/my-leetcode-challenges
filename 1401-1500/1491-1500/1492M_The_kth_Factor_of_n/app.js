// 1492. The kth Factor of n
// https://leetcode.com/problems/the-kth-factor-of-n/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && --k === 0) return i;
  }
  return -1;
};

var n = 12,
  k = 3;
var expected = 3;
var result = kthFactor(n, k);
console.log(result, result === expected);

var n = 7,
  k = 2;
var expected = 7;
var result = kthFactor(n, k);
console.log(result, result === expected);

var n = 4,
  k = 4;
var expected = -1;
var result = kthFactor(n, k);
console.log(result, result === expected);
