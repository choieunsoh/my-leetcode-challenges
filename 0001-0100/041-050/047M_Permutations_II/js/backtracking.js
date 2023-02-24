// 47. Permutations II
// https://leetcode.com/problems/permutations-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  backTracking(0);
  return result;

  function backTracking(start) {
    if (start === nums.length - 1) {
      result.push([...nums]);
      return;
    }

    const seen = new Set();
    for (let i = start; i < nums.length; i++) {
      if (seen.has(nums[i])) continue;

      seen.add(nums[i]);
      if (i > start) [nums[i], nums[start]] = [nums[start], nums[i]];
      backTracking(start + 1);
      if (i > start) [nums[i], nums[start]] = [nums[start], nums[i]];
    }
  }
};

var nums = [1, 1, 2];
var expected = [
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1],
];
var result = permuteUnique(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [1, 2, 3];
var expected = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];
var result = permuteUnique(nums);
console.log(result, result.sort().join() === expected.sort().join());
