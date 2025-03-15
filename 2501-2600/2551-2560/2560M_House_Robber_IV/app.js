// 2560. House Robber IV
// https://leetcode.com/problems/house-robber-iv/
// T.C: O(n log m)
// S.C: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let left = Math.min(...nums);
  let right = Math.max(...nums);
  let result = right;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (valid(mid, k)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function valid(limit, remain) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= limit) {
        if (--remain === 0) return true;
        i++;
      }
    }
    return false;
  }
};

var nums = [2, 3, 5, 9],
  k = 2;
var expected = 5;
var result = minCapability(nums, k);
console.log(result, result === expected);

var nums = [2, 7, 9, 3, 1],
  k = 2;
var expected = 2;
var result = minCapability(nums, k);
console.log(result, result === expected);
