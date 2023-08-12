// 85. Maximal Rectangle
// https://leetcode.com/problems/maximal-rectangle/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix.length || !matrix[0].length) return 0;

  const n = matrix[0].length;
  const height = new Array(n + 1).fill(0);
  let maxArea = 0;

  for (let row of matrix) {
    for (let i = 0; i < n; i++) {
      height[i] = row[i] === '1' ? height[i] + 1 : 0;
    }

    const stack = [-1];
    for (let i = 0; i < n + 1; i++) {
      while (height[i] < height[stack[stack.length - 1]]) {
        let h = height[stack.pop()],
          w = i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, h * w);
      }
      stack.push(i);
    }
  }
  return maxArea;
};

var matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];
var expected = 6;
var result = maximalRectangle(matrix);
console.log(result, result === expected);

var matrix = [['0']];
var expected = 0;
var result = maximalRectangle(matrix);
console.log(result, result === expected);

var matrix = [['1']];
var expected = 1;
var result = maximalRectangle(matrix);
console.log(result, result === expected);

var matrix = [
  ['0', '1'],
  ['1', '0'],
];
var expected = 1;
var result = maximalRectangle(matrix);
console.log(result, result === expected);
