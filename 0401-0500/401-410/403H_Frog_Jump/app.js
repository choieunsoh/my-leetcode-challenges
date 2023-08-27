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
  return solve(0, 0);

  function solve(index, prevJump) {
    if (index === n - 1) {
      return true;
    }

    const key = `${index}-${prevJump}`;
    if (dp.has(key)) {
      return dp.get(key);
    }

    let can = false;
    for (let nextJump = prevJump - 1; nextJump <= prevJump + 1; nextJump++) {
      if (nextJump < 1 || !stoneMap.has(stones[index] + nextJump)) continue;
      can ||= solve(stoneMap.get(stones[index] + nextJump), nextJump);
    }
    dp.set(key, can);
    return can;
  }
};

var stones = [0, 1, 3, 5, 6, 8, 12, 17];
var expected = true;
var result = canCross(stones);
console.log(result, result === expected);

var stones = [0, 1, 2, 3, 4, 8, 9, 11];
var expected = false;
var result = canCross(stones);
console.log(result, result === expected);
