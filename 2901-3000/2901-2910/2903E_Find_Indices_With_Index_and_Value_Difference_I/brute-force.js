// 2903. Find Indices With Index and Value Difference I
// https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
  const n = nums.length;
  for (let left = 0; left < n; left++) {
    for (let right = left + indexDifference; right < n; right++) {
      if (Math.abs(nums[right] - nums[left]) >= valueDifference) {
        return [left, right];
      }
    }
  }
  return [-1, -1];
};

var nums = [5, 1, 4, 1],
  indexDifference = 2,
  valueDifference = 4;
var expected = [0, 3];
var result = findIndices(nums, indexDifference, valueDifference);
console.log(result, result.join() === expected.join());

var nums = [2, 1],
  indexDifference = 0,
  valueDifference = 0;
var expected = [0, 0];
var result = findIndices(nums, indexDifference, valueDifference);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3],
  indexDifference = 2,
  valueDifference = 4;
var expected = [-1, -1];
var result = findIndices(nums, indexDifference, valueDifference);
console.log(result, result.join() === expected.join());
