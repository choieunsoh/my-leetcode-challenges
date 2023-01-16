// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let result = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result += map.get(sum - k) ?? 0;
    map.set(sum, (map.get(sum) ?? 0) + 1);
  }
  return result;
};

var nums = [1, 1, 1],
  k = 2;
var expected = 2;
var result = subarraySum(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3],
  k = 3;
var expected = 2;
var result = subarraySum(nums, k);
console.log(result, result === expected);

var nums = [1],
  k = 0;
var expected = 0;
var result = subarraySum(nums, k);
console.log(result, result === expected);

var nums = [-1, -1, 1],
  k = 0;
var expected = 1;
var result = subarraySum(nums, k);
console.log(result, result === expected);
