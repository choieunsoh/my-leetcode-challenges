// 1779. Find Nearest Point That Has the Same X or Y Coordinate
// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/?envType=study-plan&id=programming-skills-i
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let distance = Number.MAX_VALUE;
  let result = -1;
  for (let i = 0; i < points.length; i++) {
    const [a, b] = points[i];
    if (x == a || y == b) {
      const dist = Math.abs(x - a) + Math.abs(y - b);
      if (dist < distance) {
        result = i;
        distance = dist;
      }
    }
  }
  return result;
};

var x = 3,
  y = 4,
  points = [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ];
var expected = 2;
var result = nearestValidPoint(x, y, points);
console.log(result, result === expected);

var x = 3,
  y = 4,
  points = [[3, 4]];
var expected = 0;
var result = nearestValidPoint(x, y, points);
console.log(result, result === expected);

var x = 3,
  y = 4,
  points = [[2, 3]];
var expected = -1;
var result = nearestValidPoint(x, y, points);
console.log(result, result === expected);
