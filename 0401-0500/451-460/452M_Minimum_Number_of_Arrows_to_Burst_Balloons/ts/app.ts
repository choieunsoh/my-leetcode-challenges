// 452. Minimum Number of Arrows to Burst Balloons
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
// T.C.: O(N * log(N))
// S.C.: O(N)
var findMinArrowShots = function (points: number[][]): number {
  points.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let arrows = 1;
  let [, end] = points[0];
  for (let i = 1; i < points.length; i++) {
    const [s, e] = points[i];
    if (s > end) {
      end = e;
      arrows++;
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
console.log(result, expected, result === expected);

var points = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
var expected = 4;
var result = findMinArrowShots(points);
console.log(result, expected, result === expected);

var points = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
var expected = 2;
var result = findMinArrowShots(points);
console.log(result, expected, result === expected);
