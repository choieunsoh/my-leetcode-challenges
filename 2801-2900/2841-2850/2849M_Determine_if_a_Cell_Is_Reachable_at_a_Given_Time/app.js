// 2849. Determine if a Cell Is Reachable at a Given Time
// https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function (sx, sy, fx, fy, t) {
  if (sx === fx && sy === fy) return t !== 1;
  const dx = Math.abs(sx - fx);
  const dy = Math.abs(sy - fy);
  const moves = Math.max(dx, dy);
  return moves <= t;
};

var sx = 2,
  sy = 4,
  fx = 7,
  fy = 7,
  t = 6;
var expected = true;
var result = isReachableAtTime(sx, sy, fx, fy, t);
console.log(result, result === expected);

var sx = 3,
  sy = 1,
  fx = 7,
  fy = 3,
  t = 3;
var expected = false;
var result = isReachableAtTime(sx, sy, fx, fy, t);
console.log(result, result === expected);

var sx = 1,
  sy = 2,
  fx = 1,
  fy = 2,
  t = 1;
var expected = false;
var result = isReachableAtTime(sx, sy, fx, fy, t);
console.log(result, result === expected);

var sx = 1,
  sy = 2,
  fx = 1,
  fy = 2,
  t = 0;
var expected = true;
var result = isReachableAtTime(sx, sy, fx, fy, t);
console.log(result, result === expected);

var sx = 1,
  sy = 2,
  fx = 1,
  fy = 2,
  t = 3;
var expected = true;
var result = isReachableAtTime(sx, sy, fx, fy, t);
console.log(result, result === expected);
