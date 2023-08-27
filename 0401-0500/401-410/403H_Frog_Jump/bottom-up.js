// 403. Frog Jump
// https://leetcode.com/problems/frog-jump/
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  const n = stones.length;
  const stoneMap = new Map();
  for (let i = 0; i < n; i++) {
    stoneMap.set(stones[i], i);
  }

  const dp = new Map();
  dp.set('0-0', true);
  for (let index = 0; index < n; index++) {
    for (let prevJump = 0; prevJump <= n; prevJump++) {
      const key = `${index}-${prevJump}`;
      if (!dp.has(key)) continue;

      for (let nextJump = prevJump - 1; nextJump <= prevJump + 1; nextJump++) {
        if (nextJump < 1 || !stoneMap.has(stones[index] + nextJump)) continue;
        const nextKey = `${stoneMap.get(stones[index] + nextJump)}-${nextJump}`;
        dp.set(nextKey, true);
      }
    }
  }

  for (let index = 0; index <= n; index++) {
    const key = `${n - 1}-${index}`;
    if (dp.has(key)) {
      return true;
    }
  }
  return false;
};

var stones = [0, 1, 3, 5, 6, 8, 12, 17];
var expected = true;
var result = canCross(stones);
console.log(result, result === expected);

var stones = [0, 1, 2, 3, 4, 8, 9, 11];
var expected = false;
var result = canCross(stones);
console.log(result, result === expected);
