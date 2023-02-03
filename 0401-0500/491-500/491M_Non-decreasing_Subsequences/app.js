// 491. Non-decreasing Subsequences
// https://leetcode.com/problems/non-decreasing-subsequences/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = [];
  dfs(0, []);

  function dfs(start, sequences) {
    const seen = new Set();
    for (let i = start; i < nums.length; i++) {
      if (seen.has(nums[i]) || (sequences.length > 0 && sequences[sequences.length - 1] > nums[i])) continue;
      seen.add(nums[i]);
      sequences.push(nums[i]);
      if (sequences.length > 1) result.push([...sequences]);
      dfs(i + 1, sequences);
      sequences.pop();
    }
  }

  return result;
};

var nums = [4, 6, 7, 7];
var expected = [
  [4, 6],
  [4, 6, 7],
  [4, 6, 7, 7],
  [4, 7],
  [4, 7, 7],
  [6, 7],
  [6, 7, 7],
  [7, 7],
];
var result = findSubsequences(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [4, 4, 3, 2, 1];
var expected = [[4, 4]];
var result = findSubsequences(nums);
console.log(result, result.sort().join() === expected.sort().join());
