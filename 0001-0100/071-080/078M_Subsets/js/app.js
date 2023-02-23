// 78. Subsets
// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  backtrack(0, []);
  return result;

  function backtrack(start, path) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      backtrack(i + 1, [...path, nums[i]]);
    }
  }
};

var nums = [1, 2, 3];
var expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
var result = subsets(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [0];
var expected = [[], [0]];
var result = subsets(nums);
console.log(result, result.sort().join() === expected.sort().join());
