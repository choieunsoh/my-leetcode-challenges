// 3507. Minimum Pair Removal to Sort Array I
// https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let operations = 0;
  while (!isNonDecreasing(nums)) {
    let minSum = Infinity;
    let minIndex = -1;
    for (let i = 0; i < nums.length - 1; i++) {
      const currentSum = nums[i] + nums[i + 1];
      if (currentSum < minSum) {
        minSum = currentSum;
        minIndex = i;
      }
    }
    nums.splice(minIndex, 2, minSum);
    operations++;
  }
  return operations;

  function isNonDecreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
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
