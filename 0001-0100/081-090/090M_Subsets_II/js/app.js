// 90. Subsets II
// https://leetcode.com/problems/subsets-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  backTrack(0, []);
  return result;

  function backTrack(start, subset) {
    result.push([...subset]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      backTrack(i + 1, [...subset, nums[i]]);
    }
  }
};

var nums = [1, 2, 2];
var expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
var result = subsetsWithDup(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [0];
var expected = [[], [0]];
var result = subsetsWithDup(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [4, 4, 4, 1, 4];
var expected = [[], [1], [1, 4], [1, 4, 4], [1, 4, 4, 4], [1, 4, 4, 4, 4], [4], [4, 4], [4, 4, 4], [4, 4, 4, 4]];
var result = subsetsWithDup(nums);
console.log(result, result.sort().join() === expected.sort().join());
