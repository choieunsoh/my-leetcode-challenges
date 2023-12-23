// 1496. Path Crossing
// https://leetcode.com/problems/path-crossing/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const dir = {
    W: { x: -1, y: 0 },
    E: { x: 1, y: 0 },
    S: { x: 0, y: -1 },
    N: { x: 0, y: 1 },
  };
  const points = new Set();
  const point = { x: 0, y: 0 };
  let key = `${point.x},${point.y}`;
  points.add(key);
  for (const d of path) {
    point.x += dir[d].x;
    point.y += dir[d].y;
    key = `${point.x},${point.y}`;
    if (points.has(key)) {
      return true;
    }
    points.add(key);
  }

  return false;
};

var path = 'NES';
var expected = false;
var result = isPathCrossing(path);
console.log(result, result === expected);

var path = 'NESWW';
var expected = true;
var result = isPathCrossing(path);
console.log(result, result === expected);
