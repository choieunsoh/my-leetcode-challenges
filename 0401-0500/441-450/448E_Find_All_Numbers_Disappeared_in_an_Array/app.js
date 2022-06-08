// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// 448. Find All Numbers Disappeared in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  const missing = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing.push(i + 1);
    }
  }

  return missing;
};

var nums = [4, 3, 2, 7, 8, 2, 3, 1];
var expected = [5, 6];
var result = findDisappearedNumbers(nums, expected);
console.log(result.join(' '), result.join('') === expected.join(''));

var nums = [1, 1];
var expected = [2];
var result = findDisappearedNumbers(nums, expected);
console.log(result.join(' '), result.join('') === expected.join(''));
