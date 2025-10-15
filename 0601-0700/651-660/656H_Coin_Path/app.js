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
  const memo = new Array(n).fill(0);
  jump(0);

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

  function jump(startIndex) {
    if (startIndex === coins.length - 1 && coins[startIndex] >= 0) {
      return coins[startIndex];
    }

    if (memo[startIndex] > 0) {
      return memo[startIndex];
    }

    let minCost = Number.MAX_SAFE_INTEGER;
    for (let nextIndex = startIndex + 1; nextIndex <= startIndex + maxJump && nextIndex < n; nextIndex++) {
      if (coins[nextIndex] >= 0) {
        const cost = coins[startIndex] + jump(nextIndex);
        if (cost < minCost) {
          minCost = cost;
          next[startIndex] = nextIndex;
        }
      }
    }
    return (memo[startIndex] = minCost);
  }
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
