// 2670. Find the Distinct Difference Array
// https://leetcode.com/problems/find-the-distinct-difference-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const prefix = new Set(nums.slice(0, i + 1));
    const suffix = new Set(nums.slice(i + 1));
    result.push(prefix.size - suffix.size);
  }
  return result;
};

var nums = [1, 2, 3, 4, 5];
var expected = [-3, -1, 1, 3, 5];
var result = distinctDifferenceArray(nums);
console.log(result, result.join() === expected.join());

var nums = [3, 2, 3, 4, 2];
var expected = [-2, -1, 0, 2, 3];
var result = distinctDifferenceArray(nums);
console.log(result, result.join() === expected.join());
