// 78. Subsets
// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  backtracking();
  return result;

  function backtracking(start = 0, subset = []) {
    result.push([...subset]);
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backtracking(i + 1, subset);
      subset.pop();
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
