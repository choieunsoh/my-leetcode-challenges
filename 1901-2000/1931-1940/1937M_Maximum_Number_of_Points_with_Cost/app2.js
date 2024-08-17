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
  const currentRow = new Array(cols).fill(0);

  for (const row of points) {
    let runningMax = 0;
    // Left to right pass
    for (let col = 0; col < cols; ++col) {
      runningMax = Math.max(runningMax - 1, previousRow[col]);
      currentRow[col] = runningMax;
    }

    runningMax = 0;
    // Right to left pass
    for (let col = cols - 1; col >= 0; col--) {
      runningMax = Math.max(runningMax - 1, previousRow[col]);
      currentRow[col] = Math.max(currentRow[col], runningMax) + row[col];
    }

    previousRow = currentRow;
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
