// 452. Minimum Number of Arrows to Burst Balloons
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  let arrows = 1;
  points.sort((a, b) => a[1] - b[1]);
  let end = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      arrows++;
      end = points[i][1];
    }
  }
  return arrows;
};

var points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];
var expected = 2;
var result = findMinArrowShots(points);
console.log(result, result === expected);

var points = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
var expected = 4;
var result = findMinArrowShots(points);
console.log(result, result === expected);

var points = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
var expected = 2;
var result = findMinArrowShots(points);
console.log(result, result === expected);
