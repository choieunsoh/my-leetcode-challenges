// 812. Largest Triangle Area
// https://leetcode.com/problems/largest-triangle-area/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let maxArea = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        maxArea = Math.max(maxArea, triangleAre(points[i], points[j], points[k]));
      }
    }
  }
  return maxArea;

  function triangleAre(a, b, c) {
    const x1 = a[0] - b[0];
    const y1 = a[1] - b[1];
    const x2 = a[0] - c[0];
    const y2 = a[1] - c[1];
    const rectangleArea = x1 * y2 - x2 * y1;
    return Math.abs(rectangleArea) / 2;
  }
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
