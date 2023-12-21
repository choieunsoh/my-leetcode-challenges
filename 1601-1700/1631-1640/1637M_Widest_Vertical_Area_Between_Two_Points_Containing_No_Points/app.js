// 1637. Widest Vertical Area Between Two Points Containing No Points
// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let result = 0;
  points.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < points.length; i++) {
    const width = points[i][0] - points[i - 1][0];
    result = Math.max(result, width);
  }
  return result;
};

var points = [
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
];
var expected = 1;
var result = maxWidthOfVerticalArea(points);
console.log(result, result === expected);

var points = [
  [3, 1],
  [9, 0],
  [1, 0],
  [1, 4],
  [5, 3],
  [8, 8],
];
var expected = 3;
var result = maxWidthOfVerticalArea(points);
console.log(result, result === expected);
