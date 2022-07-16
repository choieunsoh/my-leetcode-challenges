// https://leetcode.com/problems/largest-rectangle-in-histogram/
// 84. Largest Rectangle in Histogram
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let max = 0;
  const stack = [{ left: 0, height: 0 }];

  function peek() {
    return stack[stack.length - 1] ?? null;
  }

  for (let i = 0; i <= heights.length; i++) {
    const height = heights[i] ?? 0;
    if (height && height > peek()?.height) {
      stack.push({ left: i + 1, height });
      continue;
    }

    while (peek()?.height > height) {
      const last = stack.pop();
      const left = peek()?.left ?? 0;
      const area = (i - left) * last.height;
      if (area > max) max = area;
    }
    stack.push({ left: i + 1, height });
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
