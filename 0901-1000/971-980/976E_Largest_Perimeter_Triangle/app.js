// https://leetcode.com/problems/largest-perimeter-triangle/
// 976. Largest Perimeter Triangle
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  let maxPerimeter = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[i + 1] > nums[i + 2]) {
      maxPerimeter = Math.max(
        maxPerimeter,
        nums[i] + nums[i + 1] + nums[i + 2]
      );
    }
  }
  return maxPerimeter;
};

var nums = [2, 1, 2];
var expected = 5;
var result = largestPerimeter(nums);
console.log(result, expected, result === expected);

var nums = [1, 2, 1];
var expected = 0;
var result = largestPerimeter(nums);
console.log(result, expected, result === expected);

var nums = [3, 2, 3, 4];
var expected = 10;
var result = largestPerimeter(nums);
console.log(result, expected, result === expected);
