// 3507. Minimum Pair Removal to Sort Array I
// https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums, operations = 0) {
  let minSum = Infinity;
  let minIndex = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (minSum > nums[i] + nums[i + 1]) {
      minSum = nums[i] + nums[i + 1];
      minIndex = i;
    }
  }
  if (nums.every((v, i) => !i || nums[i - 1] <= v) || minIndex === -1) return operations;
  nums[minIndex] = minSum;
  return minimumPairRemoval(nums.slice(0, minIndex + 1).concat(nums.slice(minIndex + 2)), operations + 1);
};

var nums = [5, 2, 3, 1];
var expected = 2;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);

var nums = [5, 2, 2, 1];
var expected = 2;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);

var nums = [1, 2, 2];
var expected = 0;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);

var nums = [2, 2, -1, 3, -2, 2, 1, 1, 1, 0, -1];
var expected = 9;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);
