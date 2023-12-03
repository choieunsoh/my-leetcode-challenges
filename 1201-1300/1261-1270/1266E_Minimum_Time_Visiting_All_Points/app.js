// 1266. Minimum Time Visiting All Points
// https://leetcode.com/problems/minimum-time-visiting-all-points/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    const x = Math.abs(points[i][0] - points[i - 1][0]);
    const y = Math.abs(points[i][1] - points[i - 1][1]);
    const dist = Math.max(x, y);
    result += dist;
  }
  return result;
};

var points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
var expected = 7;
var result = minTimeToVisitAllPoints(points);
console.log(result, result === expected);

var points = [
  [3, 2],
  [-2, 2],
];
var expected = 5;
var result = minTimeToVisitAllPoints(points);
console.log(result, result === expected);

var points = [
  [3, 2],
  [-2, 2],
  [1, 10],
];
var expected = 13;
var result = minTimeToVisitAllPoints(points);
console.log(result, result === expected);
