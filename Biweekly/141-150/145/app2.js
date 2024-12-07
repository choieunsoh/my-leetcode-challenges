/**
 * @param {number[]} strength
 * @param {number} K
 * @return {number}
 */
var findMinimumTime = function (strength, K) {
  const n = strength.length;
  const memo = new Map();
  return dfs((1 << n) - 1, 1);

  function dfs(currentLocks, currentX) {
    if (currentLocks === 0) return 0;

    const key = `${currentLocks},${currentX}`;
    if (memo.has(key)) return memo.get(key);

    let minTime = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
      if ((currentLocks & (1 << i)) === 0) continue;

      const lockTime = Math.ceil(strength[i] / currentX);
      const newLocks = currentLocks & ~(1 << i);
      const totalTime = lockTime + dfs(newLocks, currentX + K);
      minTime = Math.min(minTime, totalTime);
    }

    memo.set(key, minTime);
    return minTime;
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
