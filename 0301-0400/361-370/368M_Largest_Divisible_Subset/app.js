// 368. Largest Divisible Subset
// https://leetcode.com/problems/largest-divisible-subset/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);
  const dp = Array(nums.length).fill(1);
  const prev = Array(nums.length).fill(-1);
  let maxIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > dp[maxIndex]) maxIndex = i;
  }

  const result = [];
  while (maxIndex !== -1) {
    result.push(nums[maxIndex]);
    maxIndex = prev[maxIndex];
  }
  return result.reverse();
};

var nums = [1, 2, 3];
var expected = [1, 2];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 4, 8];
var expected = [1, 2, 4, 8];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [1];
var expected = [1];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [3, 17];
var expected = [3];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());
