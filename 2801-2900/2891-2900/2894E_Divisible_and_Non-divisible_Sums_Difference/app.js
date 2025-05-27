// 2894. Divisible and Non-divisible Sums Difference
// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  const num1 = ((n + 1) * n) / 2;
  const a = (n / m) | 0;
  const b = ((a + 1) * a) / 2;
  const num2 = b * m;
  return num1 - 2 * num2;
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
