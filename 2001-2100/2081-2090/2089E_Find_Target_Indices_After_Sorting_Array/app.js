// 2089. Find Target Indices After Sorting Array
// https://leetcode.com/problems/find-target-indices-after-sorting-array/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) result.push(i);
  }
  return result;
};

var nums = [1, 2, 5, 2, 3],
  target = 2;
var expected = [1, 2];
var result = targetIndices(nums, target);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 5, 2, 3],
  target = 3;
var expected = [3];
var result = targetIndices(nums, target);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 5, 2, 3],
  target = 5;
var expected = [4];
var result = targetIndices(nums, target);
console.log(result, result.join() === expected.join());
