// 1872. Stone Game VIII
// https://leetcode.com/problems/stone-game-viii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function (stones) {
  const n = stones.length;
  const pre = new Array(n);
  pre[0] = stones[0];
  for (let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] + stones[i];
  }

  const f = new Array(n);
  f[n - 1] = pre[n - 1];
  for (let i = n - 2; i >= 1; i--) {
    f[i] = Math.max(f[i + 1], pre[i] - f[i + 1]);
  }
  return f[1];
};

var stones = [-1, 2, -3, 4, -5];
var expected = 5;
var result = stoneGameVIII(stones);
console.log(result, result === expected);

var stones = [7, -6, 5, 10, 5, -2, -6];
var expected = 13;
var result = stoneGameVIII(stones);
console.log(result, result === expected);

var stones = [-10, -12];
var expected = -22;
var result = stoneGameVIII(stones);
console.log(result, result === expected);
