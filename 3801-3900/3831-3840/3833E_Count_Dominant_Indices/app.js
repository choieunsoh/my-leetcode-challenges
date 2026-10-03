// 3833. Count Dominant Indices
// https://leetcode.com/problems/count-dominant-indices/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function (nums) {
  let dominants = 0;
  let runningSum = nums[nums.length - 1];
  let n = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > runningSum / n) {
      dominants++;
    }
    runningSum += nums[i];
    n++;
  }
  return dominants;
};

var nums = [5, 4, 3];
var expected = 2;
var result = dominantIndices(nums);
console.log(result, result === expected);

var nums = [4, 1, 2];
var expected = 1;
var result = dominantIndices(nums);
console.log(result, result === expected);
