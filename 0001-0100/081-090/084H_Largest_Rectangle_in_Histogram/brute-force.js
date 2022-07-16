// https://leetcode.com/problems/largest-rectangle-in-histogram/
// 84. Largest Rectangle in Histogram
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    const base = heights[i];
    const arr = [heights[i]];

    // go right
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] < base) break;
      arr.push(heights[j]);
    }
    // go left
    for (let j = i - 1; j >= 0; j--) {
      if (heights[j] < base) break;
      arr.push(heights[j]);
    }

    // calc and compare
    const area = arr.length * base;
    if (area > max) max = area;
  }

  return max;
};

var heights = [4, 2, 0, 3, 2, 4, 3, 4];
var expected = 10;
var result = largestRectangleArea(heights);
console.log(result, result === expected);

var heights = [2, 1, 5, 6, 2, 3];
var expected = 10;
var result = largestRectangleArea(heights);
console.log(result, result === expected);

var heights = [2, 4];
var expected = 4;
var result = largestRectangleArea(heights);
console.log(result, result === expected);

var heights = [0];
var expected = 0;
var result = largestRectangleArea(heights);
console.log(result, result === expected);

var heights = [0, 9];
var expected = 9;
var result = largestRectangleArea(heights);
console.log(result, result === expected);
