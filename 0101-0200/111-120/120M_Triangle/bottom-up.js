// 120. Triangle
// https://leetcode.com/problems/triangle/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let row = 1; row < triangle.length; row++) {
    for (let col = 0; col <= row; col++) {
      let smallestAbove = Number.MAX_VALUE;
      if (col > 0) {
        smallestAbove = triangle[row - 1][col - 1];
      }
      if (col < row) {
        smallestAbove = Math.min(smallestAbove, triangle[row - 1][col]);
      }
      triangle[row][col] += smallestAbove;
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
};

var triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
var expected = 11;
var result = minimumTotal(triangle);
console.log(result, result === expected);

var triangle = [[-10]];
var expected = -10;
var result = minimumTotal(triangle);
console.log(result, result === expected);
