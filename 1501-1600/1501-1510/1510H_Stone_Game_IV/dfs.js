// 1510. Stone Game IV
// https://leetcode.com/problems/stone-game-iv/description/
// T.C.: O(n * sqrt(n))
// S.C.: O(n)
/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const cache = new Map();
  cache.set(0, false);
  return dfs(cache, n);

  function dfs(cache, remain) {
    if (cache.has(remain)) {
      return cache.get(remain);
    }

    const sqrtRoot = Math.floor(Math.sqrt(remain));
    for (let i = 1; i <= sqrtRoot; i++) {
      if (!dfs(cache, remain - i * i)) {
        cache.set(remain, true);
        return true;
      }
    }

    cache.set(remain, false);
    return false;
  }
};

var n = 1;
var expected = true;
var result = winnerSquareGame(n);
console.log(result, result === expected);

var n = 2;
var expected = false;
var result = winnerSquareGame(n);
console.log(result, result === expected);

var n = 4;
var expected = true;
var result = winnerSquareGame(n);
console.log(result, result === expected);
