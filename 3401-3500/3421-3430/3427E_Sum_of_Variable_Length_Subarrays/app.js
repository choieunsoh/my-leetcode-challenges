// 3427. Sum of Variable Length Subarrays
// https://leetcode.com/problems/sum-of-variable-length-subarrays/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
  const n = nums.length;
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  let sum = 0;
  for (let end = 0; end < n; end++) {
    const start = Math.max(0, end - nums[end]);
    sum += prefixSum[end + 1] - prefixSum[start];
  }
  return sum;
};

var nums = [2, 3, 1];
var expected = 11;
var result = subarraySum(nums);
console.log(result, result === expected);

var nums = [3, 1, 1, 2];
var expected = 13;
var result = subarraySum(nums);
console.log(result, result === expected);
