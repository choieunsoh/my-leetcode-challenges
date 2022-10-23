// 90. Subsets II
// https://leetcode.com/problems/subsets-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  backTracking();
  return result;

  function backTracking(i = 0, subset = []) {
    if (i === nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    backTracking(i + 1, subset);
    subset.pop();

    while (i < nums.length && nums[i] === nums[i + 1]) i++;
    backTracking(i + 1, subset);
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
var expected = [
  [],
  [1],
  [1, 4],
  [1, 4, 4],
  [1, 4, 4, 4],
  [1, 4, 4, 4, 4],
  [4],
  [4, 4],
  [4, 4, 4],
  [4, 4, 4, 4],
];
var result = subsetsWithDup(nums);
console.log(result, result.sort().join() === expected.sort().join());
