// https://leetcode.com/problems/largest-rectangle-in-histogram/
// 84. Largest Rectangle in Histogram
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const len = heights.length;
  const stack = [];
  let max = 0;

  function lessThanPrevHight(i) {
    const prevHeight = heights[stack[stack.length - 1]];
    return stack.length && (i === len || heights[i] <= prevHeight);
  }

  for (let i = 0; i <= len; i++) {
    while (lessThanPrevHight(i)) {
      const h = heights[stack.pop()];
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      max = Math.max(max, h * w);
    }
    stack.push(i);
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
