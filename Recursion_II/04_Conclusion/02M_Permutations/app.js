// https://leetcode.com/problems/permutations/
// 46. Permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = (nums) => {
  const result = [];
  const end = nums.length - 1;

  const generatePermutation = (start = 0) => {
    if (start === end) {
      result.push([...nums]);
    } else {
      for (let i = start; i <= end; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]];
        generatePermutation(start + 1);
        [nums[start], nums[i]] = [nums[i], nums[start]];
      }
    }
  };

  generatePermutation();
  return result;
};

var nums = [1, 2, 3];
var expected = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
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
