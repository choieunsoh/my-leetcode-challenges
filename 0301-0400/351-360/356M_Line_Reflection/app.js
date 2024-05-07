// 356. Line Reflection
// https://leetcode.com/problems/line-reflection/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function (points) {
  let minX = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  const set = new Set();
  for (const point of points) {
    const [x, y] = point;
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    set.add(point.join());
  }

  const middle = (minX + maxX) / 2;
  for (const [x, y] of points) {
    const oppositePoint = [2 * middle - x, y];
    if (!set.has(oppositePoint.join())) return false;
  }

  return true;
};

var points = [
  [1, 1],
  [-1, 1],
];
var expected = true;
var result = isReflected(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [-1, -1],
];
var expected = false;
var result = isReflected(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [-1, 1],
  [2, 1],
  [-2, 1],
];
var expected = true;
var result = isReflected(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [-1, 1],
  [2, 1],
  [-3, 1],
];
var expected = false;
var result = isReflected(points);
console.log(result, result === expected);

var points = [
  [-16, 1],
  [16, 1],
  [16, 1],
];
var expected = true;
var result = isReflected(points);
console.log(result, result === expected);
