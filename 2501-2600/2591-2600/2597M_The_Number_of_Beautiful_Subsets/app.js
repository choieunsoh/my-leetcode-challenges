// 2597. The Number of Beautiful Subsets
// https://leetcode.com/problems/the-number-of-beautiful-subsets/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  let result = 0;
  dfs([], nums);
  return result;

  function dfs(curr, nums) {
    for (let i = 0; i < nums.length; i++) {
      let valid = true;
      for (const num of curr) {
        if (Math.abs(num - nums[i]) === k) {
          valid = false;
          break;
        }
      }
      if (valid) {
        result++;
        dfs([...curr, nums[i]], nums.slice(i + 1));
      }
    }
  }
};

var nums = [10, 4, 5, 7, 2, 1],
  k = 3;
var expected = 23;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);

var nums = [2, 4, 6],
  k = 2;
var expected = 4;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);

var nums = [1],
  k = 1;
var expected = 1;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);

var nums = [4, 2, 5, 9, 10, 3],
  k = 1;
var expected = 23;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);
