// 2894. Divisible and Non-divisible Sums Difference
// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      result -= i;
    } else {
      result += i;
    }
  }
  return result;
};

var n = 10,
  m = 3;
var expected = 19;
var result = differenceOfSums(n, m);
console.log(result, result === expected);

var n = 5,
  m = 6;
var expected = 15;
var result = differenceOfSums(n, m);
console.log(result, result === expected);

var n = 5,
  m = 1;
var expected = -15;
var result = differenceOfSums(n, m);
console.log(result, result === expected);
