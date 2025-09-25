// 120. Triangle
// https://leetcode.com/problems/triangle/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangleInput) {
  let triangle;
  let memoTable = new Map();

  triangle = triangleInput;
  memoTable.clear();
  return minPath(0, 0);

  function minPath(row, col) {
    let params = row + ':' + col;
    if (memoTable.has(params)) {
      return memoTable.get(params);
    }
    let path = triangle[row][col];
    if (row < triangle.length - 1) {
      path += Math.min(minPath(row + 1, col), minPath(row + 1, col + 1));
    }
    memoTable.set(params, path);
    return path;
  }
};

var triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
var expected = 11;
var result = minimumTotal(triangle);
console.log(result, result === expected);

var triangle = [[-10]];
var expected = -10;
var result = minimumTotal(triangle);
console.log(result, result === expected);
