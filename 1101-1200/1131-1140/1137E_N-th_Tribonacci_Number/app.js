// 1137. N-th Tribonacci Number
// https://leetcode.com/problems/n-th-tribonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const nums = Array(n + 1);
  nums[0] = 0;
  nums[1] = 1;
  nums[2] = 1;
  for (let i = 3; i <= n; i++) {
    nums[i] = nums[i - 3] + nums[i - 2] + nums[i - 1];
  }
  return nums[n];
};

var n = 4;
var expected = 4;
var result = tribonacci(n);
console.log(result, result === expected);

var n = 25;
var expected = 1389537;
var result = tribonacci(n);
console.log(result, result === expected);
