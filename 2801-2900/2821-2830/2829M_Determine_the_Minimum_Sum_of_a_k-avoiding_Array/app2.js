// 2829. Determine the Minimum Sum of a k-avoiding Array
// https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function (n, k) {
  let result = 0;
  const nums = new Set();
  for (let i = 1; nums.size < n; i++) {
    if (!nums.has(k - i)) {
      nums.add(i);
      result += i;
    }
  }
  return result;
};

var n = 5,
  k = 4;
var expected = 18;
var result = minimumSum(n, k);
console.log(result, result === expected);

var n = 5,
  k = 9;
var expected = 19;
var result = minimumSum(n, k);
console.log(result, result === expected);

var n = 2,
  k = 6;
var expected = 3;
var result = minimumSum(n, k);
console.log(result, result === expected);

var n = 6,
  k = 22;
var expected = 21;
var result = minimumSum(n, k);
console.log(result, result === expected);

var n = 27,
  k = 49;
var expected = 450;
var result = minimumSum(n, k);
console.log(result, result === expected);
