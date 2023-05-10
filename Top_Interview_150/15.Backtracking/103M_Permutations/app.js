// 46. Permutations
// https://leetcode.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  generatePermutation();
  return result;

  function generatePermutation(start = 0) {
    if (start === nums.length - 1) {
      result.push([...nums]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      generatePermutation(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
};

var nums = [1, 2, 3];
var expected = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 2, 1],
  [3, 1, 2],
];
var result = permute(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 1];
var expected = [
  [0, 1],
  [1, 0],
];
var result = permute(nums);
console.log(result, result.join() === expected.join());

var nums = [1];
var expected = [[1]];
var result = permute(nums);
console.log(result, result.join() === expected.join());
