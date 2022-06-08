// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// 448. Find All Numbers Disappeared in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const seen = {};
  for (let i = 0; i < n; i++) {
    seen[nums[i]] = true;
  }

  const missing = [];
  for (let i = 1; i <= n; i++) {
    if (seen[i] === undefined) missing.push(i);
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
