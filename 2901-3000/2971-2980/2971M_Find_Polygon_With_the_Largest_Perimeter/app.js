// 2971. Find Polygon With the Largest Perimeter
// https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  let result = -1;
  let prevSum = 0;
  nums.sort((a, b) => a - b);
  for (const num of nums) {
    if (num < prevSum) {
      result = num + prevSum;
    }
    prevSum += num;
  }
  return result;
};

var nums = [5, 5, 5];
var expected = 15;
var result = largestPerimeter(nums);
console.log(result, result === expected);

var nums = [1, 12, 1, 2, 5, 50, 3];
var expected = 12;
var result = largestPerimeter(nums);
console.log(result, result === expected);

var nums = [5, 5, 50];
var expected = -1;
var result = largestPerimeter(nums);
console.log(result, result === expected);
