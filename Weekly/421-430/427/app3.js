/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
  const n = nums.length;
  const mins = new Array(k).fill(Number.MAX_SAFE_INTEGER);
  mins[k - 1] = 0;
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    max = Math.max(max, sum - mins[i % k]);
    mins[i % k] = Math.min(mins[i % k], sum);
  }
  return max;
};

var nums = [1, 2],
  k = 1;
var expected = 3;
var result = maxSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [-1, -2, -3, -4, -5],
  k = 4;
var expected = -10;
var result = maxSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [-5, 1, 2, -3, 4],
  k = 2;
var expected = 4;
var result = maxSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [-5, 1, 2, -3, 4, 2, 1],
  k = 2;
var expected = 7;
var result = maxSubarraySum(nums, k);
console.log(result, result === expected); // Output: 4 true
