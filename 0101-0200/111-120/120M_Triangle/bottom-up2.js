// 120. Triangle
// https://leetcode.com/problems/triangle/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let prevRow = triangle[0];
  for (let row = 1; row < triangle.length; row++) {
    let currRow = [];
    for (let col = 0; col <= row; col++) {
      let smallestAbove = Number.MAX_VALUE;
      if (col > 0) {
        smallestAbove = prevRow[col - 1];
      }
      if (col < row) {
        smallestAbove = Math.min(smallestAbove, prevRow[col]);
      }
      currRow.push(smallestAbove + triangle[row][col]);
    }
    prevRow = currRow;
  }
  return Math.min(...prevRow);
};

var triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
var expected = 11;
var result = minimumTotal(triangle);
console.log(result, result === expected);

var triangle = [[-10]];
var expected = -10;
var result = minimumTotal(triangle);
console.log(result, result === expected);
