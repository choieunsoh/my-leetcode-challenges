// 656. Coin Path
// https://leetcode.com/problems/coin-path/description/
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {number[]} coins
 * @param {number} maxJump
 * @return {number[]}
 */
var cheapestJump = function (coins, maxJump) {
  const n = coins.length;
  const next = new Array(n).fill(-1);
  const dp = new Array(n).fill(0);
  for (let i = n - 2; i >= 0; i--) {
    let minCost = Number.MAX_SAFE_INTEGER;
    for (let j = i + 1; j <= i + maxJump && j < n; j++) {
      if (coins[j] >= 0) {
        const cost = coins[i] + dp[j];
        if (cost < minCost) {
          minCost = cost;
          next[i] = j;
        }
      }
    }
    dp[i] = minCost;
  }

  const result = [];
  let i = 0;
  while (i < n && next[i] > 0) {
    result.push(i + 1);
    i = next[i];
  }

  if (i === n - 1 && coins[i] >= 0) {
    result.push(n);
    return result;
  }

  return [];
};

var coins = [1, 2, 4, -1, 2],
  maxJump = 2;
var expected = [1, 3, 5];
var result = cheapestJump(coins, maxJump);
console.log(result, result.join() === expected.join());

var coins = [1, 2, 4, -1, 2],
  maxJump = 1;
var expected = [];
var result = cheapestJump(coins, maxJump);
console.log(result, result.join() === expected.join());
