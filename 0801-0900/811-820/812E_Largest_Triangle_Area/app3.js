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
        maxArea = Math.max(maxArea, shoelaceFormula(points[i], points[j], points[k]));
      }
    }
  }
  return maxArea;

  function shoelaceFormula(...vertices) {
    let downwardProduct = 0;
    let upwardProduct = 0;
    for (let i = 0; i < vertices.length; i++) {
      const j = (i + 1) % vertices.length;
      const vector1 = vertices[i];
      const vector2 = vertices[j];
      downwardProduct += vector1[0] * vector2[1];
      upwardProduct += vector2[0] * vector1[1];
    }

    const area = Math.abs(downwardProduct - upwardProduct) / 2;
    return area;
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

var points = [
  [0, 2],
  [4, 4],
  [5, 0],
];
var expected = 9;
var actual = largestTriangleArea(points);
console.log(actual, actual === expected);
