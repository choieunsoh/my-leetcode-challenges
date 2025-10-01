// 3194. Minimum Average of Smallest and Largest Elements
// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);
  let minAverage = Infinity;
  let minIndex = 0;
  let maxIndex = nums.length - 1;
  while (minIndex < maxIndex) {
    const average = (nums[minIndex++] + nums[maxIndex--]) / 2;
    minAverage = Math.min(minAverage, average);
  }
  return minAverage;
};

var nums = [7, 8, 3, 4, 15, 13, 4, 1];
var expected = 5.5;
var result = minimumAverage(nums);
console.log(result, result === expected);

var nums = [1, 9, 8, 3, 10, 5];
var expected = 5.5;
var result = minimumAverage(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 7, 8, 9];
var expected = 5.0;
var result = minimumAverage(nums);
console.log(result, result === expected);
