// 120. Triangle
// https://leetcode.com/problems/triangle/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 1; i > 0; i--) {
    const row = triangle[i];
    for (let j = 0; j < row.length - 1; j++) {
      triangle[i - 1][j] += Math.min(row[j], row[j + 1]);
    }
  }
  return triangle[0];
};

var triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
var expected = 11;
var result = minimumTotal(triangle);
console.log(result, result === expected);

var triangle = [[-10]];
var expected = -10;
var result = minimumTotal(triangle);
console.log(result, result === expected);
