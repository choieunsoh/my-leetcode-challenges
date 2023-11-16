// 523. Continuous Subarray Sum
// https://leetcode.com/problems/continuous-subarray-sum/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map();
  const n = nums.length;
  let sum = 0;
  map.set(sum, -1);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    sum = (sum + num) % k;
    if (map.has(sum)) {
      const lastIndex = map.get(sum);
      if (i - lastIndex > 1) return true;
      continue;
    }
    map.set(sum, i);
  }
  return false;
};

var nums = [23, 2, 4, 6, 7],
  k = 6;
var expected = true;
var result = checkSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [23, 2, 6, 4, 7],
  k = 6;
var expected = true;
var result = checkSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [23, 2, 6, 4, 7],
  k = 13;
var expected = false;
var result = checkSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [23, 2, 4, 6, 6],
  k = 7;
var expected = true;
var result = checkSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [5, 0, 0, 0],
  k = 3;
var expected = true;
var result = checkSubarraySum(nums, k);
console.log(result, result === expected);
