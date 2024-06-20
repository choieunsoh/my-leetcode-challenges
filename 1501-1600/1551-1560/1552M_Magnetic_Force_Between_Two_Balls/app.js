// 1552. Magnetic Force Between Two Balls
// https://leetcode.com/problems/magnetic-force-between-two-balls/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  const n = position.length;
  position.sort((a, b) => a - b);
  let result = 0;
  let left = 1;
  let right = Math.ceil(position[n - 1] / (m - 1));
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (canPlaceBalls(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;

  function canPlaceBalls(force) {
    let placedBalls = 1;
    let prevPosition = position[0];
    for (let i = 1; i < n && placedBalls < m; i++) {
      if (position[i] - prevPosition >= force) {
        placedBalls++;
        prevPosition = position[i];
      }
    }
    return placedBalls === m;
  }
};

var position = [1, 2, 3, 4, 7],
  m = 3;
var expected = 3;
var result = maxDistance(position, m);
console.log(result, result === expected);

var position = [5, 4, 3, 2, 1, 1000000000],
  m = 2;
var expected = 999999999;
var result = maxDistance(position, m);
console.log(result, result === expected);

var position = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  m = 4;
var expected = 3;
var result = maxDistance(position, m);
console.log(result, result === expected);
