// 3449. Maximize the Minimum Game Score
// https://leetcode.com/problems/maximize-the-minimum-game-score/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} points
 * @param {number} m
 * @return {number}
 */
var maxScore = function (points, m) {
  const n = points.length;
  if (m < n) return 0;

  let left = 1;
  let right = 1e18;
  let result = 0;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (canAchieve(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;

  function canAchieve(val) {
    let total = 0;
    let transfer = 0;
    let skipAdd = 0;

    for (let i = 0; i < n && total <= m; i++) {
      const point = points[i];
      const necessary = Math.floor((val + point - 1) / point);

      if (transfer >= necessary) {
        transfer = 0;
        skipAdd++;
      } else {
        const p = transfer * point;
        const ops = Math.floor((val - p + point - 1) / point);
        total += 2 * ops - 1;
        total += skipAdd;

        transfer = Math.max(ops - 1, 0);
        skipAdd = 0;
      }
    }
    return total <= m;
  }
};

var points = [2, 4],
  m = 3;
var expected = 4;
var result = maxScore(points, m);
console.log(result, result === expected);

var points = [1, 2, 3],
  m = 5;
var expected = 2;
var result = maxScore(points, m);
console.log(result, result === expected);
