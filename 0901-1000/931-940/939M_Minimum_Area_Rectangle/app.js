// 939. Minimum Area Rectangle
// https://leetcode.com/problems/minimum-area-rectangle/description/
// T.C.: O(n ^ 2)
// S.C.: O(n)
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
  const map = new Map();
  for (const [x, y] of points) {
    if (!map.has(x)) map.set(x, new Set());
    map.get(x).add(y);
  }

  let result = Number.MAX_SAFE_INTEGER;
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      if (x1 === x2 || y1 === y2) continue;
      if (map.get(x1).has(y2) && map.get(x2).has(y1)) {
        result = Math.min(result, Math.abs(x1 - x2) * Math.abs(y1 - y2));
      }
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};

var points = [
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
  [2, 2],
];
var expected = 4;
var result = minAreaRect(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
  [4, 1],
  [4, 3],
];
var expected = 2;
var result = minAreaRect(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
  [3, 6],
  [4, 1],
  [4, 6],
];
var expected = 4;
var result = minAreaRect(points);
console.log(result, result === expected);
