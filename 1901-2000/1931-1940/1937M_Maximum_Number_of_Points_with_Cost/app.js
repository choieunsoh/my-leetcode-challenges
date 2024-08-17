// 1937. Maximum Number of Points with Cost
// https://leetcode.com/problems/maximum-number-of-points-with-cost/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const rows = points.length;
  const cols = points[0].length;
  let previousRow = new Array(cols).fill(0);
  for (let col = 0; col < cols; ++col) {
    previousRow[col] = points[0][col];
  }

  for (let row = 0; row < rows - 1; row++) {
    const leftMax = new Array(cols).fill(0);
    const rightMax = new Array(cols).fill(0);
    const currentMax = new Array(cols).fill(0);

    leftMax[0] = previousRow[0];
    for (let col = 1; col < cols; col++) {
      leftMax[col] = Math.max(previousRow[col], leftMax[col - 1] - 1);
    }

    rightMax[cols - 1] = previousRow[cols - 1];
    for (let col = cols - 2; col >= 0; col--) {
      rightMax[col] = Math.max(previousRow[col], rightMax[col + 1] - 1);
    }

    for (let col = 0; col < cols; col++) {
      currentMax[col] = points[row + 1][col] + Math.max(leftMax[col], rightMax[col]);
    }

    previousRow = currentMax;
  }
  return Math.max(...previousRow);
};

var points = [
  [1, 2, 3],
  [1, 5, 1],
  [3, 1, 1],
];
var expected = 9;
var result = maxPoints(points);
console.log(result, result === expected);

var points = [
  [1, 5],
  [2, 3],
  [4, 2],
];
var expected = 11;
var result = maxPoints(points);
console.log(result, result === expected);
