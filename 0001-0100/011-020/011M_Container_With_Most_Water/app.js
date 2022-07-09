// https://leetcode.com/problems/container-with-most-water/
// 11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = (heights) => {
  let max = 0;
  let left = 0;
  let right = heights.length - 1;

  const getArea = (left, right) => {
    const minHeight = Math.min(heights[left], heights[right]);
    const width = right - left;
    return width * minHeight;
  };

  while (left < right) {
    const area = getArea(left, right);
    if (area > max) max = area;
    heights[left] < heights[right] ? left++ : right--;
  }

  return max;
};

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var expected = 49;
console.log(maxArea(height), expected);

var height = [2, 3, 4, 5, 18, 17, 6];
var expected = 17;
console.log(maxArea(height), expected);

var height = [1, 2, 3, 4, 5, 25, 24, 3, 4];
var expected = 24;
console.log(maxArea(height), expected);
