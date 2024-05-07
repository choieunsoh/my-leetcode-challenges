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
  for (const [x] of points) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
  }

  const middle = (minX + maxX) / 2;
  const map = new Map();
  for (const [x, y] of points) {
    if (x === middle) continue;
    const sign = x > middle ? 1 : -1;
    const dist = Math.abs(x - middle);
    const pos = dist * sign;
    if (!map.has(pos)) map.set(pos, new Set());
    map.get(pos).add(y);
  }

  for (const [dist, list] of map) {
    const otherDist = dist * -1;
    if (!map.has(otherDist)) return false;
    const otherList = map.get(otherDist);
    for (const y of list) {
      if (!otherList.has(y)) return false;
    }
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
