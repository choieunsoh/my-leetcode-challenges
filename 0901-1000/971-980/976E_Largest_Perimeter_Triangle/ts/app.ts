// 976. Largest Perimeter Triangle
// https://leetcode.com/problems/largest-perimeter-triangle/
var largestPerimeter = function (nums: number[]): number {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i + 1] + nums[i + 2] > nums[i]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  return 0;
};

var nums = [2, 1, 2];
var expected = 5;
var result = largestPerimeter(nums);
console.log(result, expected, result === expected);

var nums = [1, 2, 1];
var expected = 0;
var result = largestPerimeter(nums);
console.log(result, expected, result === expected);

var nums = [1, 2, 1, 10];
var expected = 0;
var result = largestPerimeter(nums);
console.log(result, expected, result === expected);

var nums = [3, 2, 3, 4];
var expected = 10;
var result = largestPerimeter(nums);
console.log(result, expected, result === expected);
