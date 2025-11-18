// 1037. Valid Boomerang
// https://leetcode.com/problems/valid-boomerang/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  const polygonArea = (x1 * y2 + x2 * y3 + x3 * y1 - (y1 * x2 + y2 * x3 + y3 * x1)) / 2;
  return polygonArea !== 0;
};

var points = [
  [1, 1],
  [2, 3],
  [3, 2],
];
var expected = true;
var result = isBoomerang(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [2, 2],
  [3, 3],
];
var expected = false;
var result = isBoomerang(points);
console.log(result, result === expected);
