// https://leetcode.com/problems/container-with-most-water/
// 11. Container With Most Water
var maxArea = function (heights: number[]): number {
  let max = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    const area = height * width;
    max = Math.max(max, area);
    heights[left] < heights[right] ? left++ : right--;
  }
  return max;
};

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var expected = 49;
var result = maxArea(height);
console.log(result, expected, result === expected);

var height = [2, 3, 4, 5, 18, 17, 6];
var expected = 17;
var result = maxArea(height);
console.log(result, expected, result === expected);

var height = [1, 2, 3, 4, 5, 25, 24, 3, 4];
var expected = 24;
var result = maxArea(height);
console.log(result, expected, result === expected);
