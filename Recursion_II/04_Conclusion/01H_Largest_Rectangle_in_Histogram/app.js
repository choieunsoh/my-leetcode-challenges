// https://leetcode.com/problems/largest-rectangle-in-histogram/
// 84. Largest Rectangle in Histogram
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const len = heights.length;
  if (!len) return 0;

  const stack = [];
  const right = [];
  for (let i = 0; i < len; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      right[stack.pop()] = i - 1;
    }
    stack.push(i);
  }
  while (stack.length) right[stack.pop()] = len - 1;

  const left = [];
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      left[stack.pop()] = i + 1;
    }
    stack.push(i);
  }
  while (stack.length) left[stack.pop()] = 0;

  console.log({ L: left.join() });
  console.log({ R: right.join() });
  let max = 0;
  for (let i = 0; i < len; i++) {
    const area = (right[i] - left[i] + 1) * heights[i];
    console.log({
      i,
      r: right[i],
      l: left[i],
      w: right[i] - left[i] + 1,
      h: heights[i],
      area,
    });
    max = Math.max(max, area);
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
