// 3376. Minimum Time to Break Locks I
// https://leetcode.com/problems/minimum-time-to-break-locks-i/description/
// T.C.: O(n!)
// S.C.: O(n)
/**
 * @param {number[]} strength
 * @param {number} K
 * @return {number}
 */
var findMinimumTime = function (strength, K) {
  const n = strength.length;
  const used = new Array(n).fill(false);
  let minTime = Number.MAX_SAFE_INTEGER;
  backtrack(0, 1, 0);
  return minTime;

  function backtrack(index, currentX, currentTime) {
    if (index === n) {
      minTime = Math.min(minTime, currentTime);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      const requiredStrength = strength[i];
      const timeToBreak = Math.floor((requiredStrength + currentX - 1) / currentX);
      const newTime = currentTime + timeToBreak;

      if (newTime >= minTime) {
        continue;
      }

      used[i] = true;
      backtrack(index + 1, currentX + K, newTime);
      used[i] = false;
    }
  }
};

var strength = [3, 4, 1],
  K = 1;
var expected = 4;
var result = findMinimumTime(strength, K);
console.log(result, result === expected);

var strength = [2, 5, 4],
  K = 2;
var expected = 5;
var result = findMinimumTime(strength, K);
console.log(result, result === expected);

var strength = [40, 50],
  K = 4;
var expected = 50;
var result = findMinimumTime(strength, K);
console.log(result, result === expected);

var strength = [7, 3, 6, 18, 22, 50],
  K = 4;
var expected = 12;
var result = findMinimumTime(strength, K);
console.log(result, result === expected);
