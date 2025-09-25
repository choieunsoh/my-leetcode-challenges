// 120. Triangle
// https://leetcode.com/problems/triangle/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      let bestBelow = Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
      triangle[row][col] += bestBelow;
    }
  }
  return triangle[0][0];
};

var triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
var expected = 11;
var result = minimumTotal(triangle);
console.log(result, result === expected);

var triangle = [[-10]];
var expected = -10;
var result = minimumTotal(triangle);
console.log(result, result === expected);
