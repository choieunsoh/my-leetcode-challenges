// 2815. Max Pair Sum in an Array
// https://leetcode.com/problems/max-pair-sum-in-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  const digits = Array.from({ length: 10 }, () => [-1, -1]);
  for (const num of nums) {
    const max = Math.max(...String(num).split('').map(Number));
    const list = digits[max];
    if (num >= list[0]) {
      [list[0], list[1]] = [num, list[0]];
    } else if (num >= list[1]) {
      list[1] = num;
    }
  }

  let result = -1;
  for (const pairs of digits) {
    if (pairs[0] === -1 || pairs[1] === -1) continue;
    const sum = pairs[0] + pairs[1];
    if (sum > result) result = sum;
  }
  return result;
};

var nums = [51, 71, 17, 24, 42];
var expected = 88;
var result = maxSum(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = -1;
var result = maxSum(nums);
console.log(result, result === expected);
