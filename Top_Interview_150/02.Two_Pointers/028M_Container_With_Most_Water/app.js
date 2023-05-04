// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = (heights) => {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    const area = getArea(left, right);
    if (area > maxArea) maxArea = area;
    if (height[left] < heights[right]) left++;
    else right--;
  }
  return maxArea;

  function getArea(left, right) {
    const minHeight = Math.min(heights[left], heights[right]);
    const width = right - left;
    return width * minHeight;
  }
};

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var expected = 49;
var result = maxArea(height);
console.log(result, result === expected);

var height = [2, 3, 4, 5, 18, 17, 6];
var expected = 17;
var result = maxArea(height);
console.log(result, result === expected);

var height = [1, 2, 3, 4, 5, 25, 24, 3, 4];
var expected = 24;
var result = maxArea(height);
console.log(result, result === expected);
