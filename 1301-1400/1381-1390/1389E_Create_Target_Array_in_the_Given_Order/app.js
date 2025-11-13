// 1389. Create Target Array in the Given Order
// https://leetcode.com/problems/create-target-array-in-the-given-order/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const result = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    result.splice(index[i], 0, nums[i]);
  }
  return result;
};

var nums = [0, 1, 2, 3, 4],
  index = [0, 1, 2, 2, 1];
var expected = [0, 4, 1, 3, 2];
var result = createTargetArray(nums, index);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3, 4, 0],
  index = [0, 1, 2, 3, 0];
var expected = [0, 1, 2, 3, 4];
var result = createTargetArray(nums, index);
console.log(result, result.join() === expected.join());

var nums = [1],
  index = [0];
var expected = [1];
var result = createTargetArray(nums, index);
console.log(result, result.join() === expected.join());

var nums = [4, 2, 4, 3, 2],
  index = [0, 0, 1, 3, 1];
var expected = [2, 2, 4, 4, 3];
var result = createTargetArray(nums, index);
console.log(result, result.join() === expected.join());
