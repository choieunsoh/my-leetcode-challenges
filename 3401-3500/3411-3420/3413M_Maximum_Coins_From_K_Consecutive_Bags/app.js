// 3413. Maximum Coins From K Consecutive Bags
// https://leetcode.com/problems/maximum-coins-from-k-consecutive-bags/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} coins
 * @param {number} k
 * @return {number}
 */
var maximumCoins = function (coins, k) {
  coins.sort((a, b) => a[0] - b[0]);
  const n = coins.length;
  let result = 0;
  let curr = 0;
  for (let right = 0, left = 0; right < n; right++) {
    while (left < n && coins[right][0] + k - 1 >= coins[left][1]) {
      curr += (coins[left][1] - coins[left][0] + 1) * coins[left][2];
      left++;
    }
    result = Math.max(result, curr);
    if (left < n) {
      const part = Math.max(0, coins[right][0] + k - coins[left][0]) * coins[left][2];
      result = Math.max(result, curr + part);
    }
    curr -= (coins[right][1] - coins[right][0] + 1) * coins[right][2];
  }

  curr = 0;
  for (let i = n - 1, j = n - 1; j >= 0; j--) {
    while (i >= 0 && coins[j][1] - k + 1 <= coins[i][0]) {
      curr += 1 * (coins[i][1] - coins[i][0] + 1) * coins[i][2];
      i--;
    }
    result = Math.max(result, curr);
    if (i >= 0) {
      const part = 1 * Math.max(0, coins[i][1] - coins[j][1] + k) * coins[i][2];
      result = Math.max(result, curr + part);
    }
    curr -= 1 * (coins[j][1] - coins[j][0] + 1) * coins[j][2];
  }
  return result;
};

var coins = [
    [8, 10, 1],
    [1, 3, 2],
    [5, 6, 4],
  ],
  k = 4;
var expected = 10;
var result = maximumCoins(coins, k);
console.log(result, result === expected);

var coins = [[1, 10, 3]],
  k = 2;
var expected = 6;
var result = maximumCoins(coins, k);
console.log(result, result === expected);
