// 491. Non-decreasing Subsequences
// https://leetcode.com/problems/non-decreasing-subsequences/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = new Set();
  backtracking(0, []);

  function backtracking(index = 0, sequences = []) {
    if (index >= nums.length) {
      if (sequences.length > 1) {
        result.add(JSON.stringify(sequences));
      }
      return;
    }

    if (sequences.length === 0 || sequences[sequences.length - 1] <= nums[index]) {
      sequences.push(nums[index]);

      backtracking(index + 1, sequences);
      sequences.pop();
    }
    backtracking(index + 1, sequences);
  }

  return [...result].map(JSON.parse);
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
