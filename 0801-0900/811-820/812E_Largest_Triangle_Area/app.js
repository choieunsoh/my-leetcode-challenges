// https://leetcode.com/problems/largest-triangle-area/
// 812. Largest Triangle Area
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  function area(a, b, c) {
    return (
      Math.abs(
        a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])
      ) / 2
    );
  }

  let max = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        max = Math.max(max, area(points[i], points[j], points[k]));
      }
    }
  }
  return max;
};

var points = [
  [0, 0],
  [0, 1],
  [1, 0],
  [0, 2],
  [2, 0],
];
var expected = 2.0;
var actual = largestTriangleArea(points);
console.log(actual, actual === expected);

var points = [
  [1, 0],
  [0, 0],
  [0, 1],
];
var expected = 0.5;
var actual = largestTriangleArea(points);
console.log(actual, actual === expected);

var points = [
  [4, 6],
  [6, 5],
  [3, 1],
];
var expected = 5.5;
var actual = largestTriangleArea(points);
console.log(actual, actual === expected);
