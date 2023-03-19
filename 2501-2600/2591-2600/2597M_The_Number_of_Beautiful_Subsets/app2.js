// 2597. The Number of Beautiful Subsets
// https://leetcode.com/problems/the-number-of-beautiful-subsets/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  let result = 0;
  nums.sort((a, b) => a - b);
  dfs(new Set(), 0);
  return result - 1;

  function dfs(seen, i) {
    for (let j = i; j < nums.length; j++) {
      if (seen.has(nums[j] - k)) continue;
      seen.add(nums[j]);
      dfs(seen, j + 1);
      seen.delete(nums[j]);
    }
    result++;
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
