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
  const n = coins.length;
  let result = solve(coins);
  for (let i = 0; i < coins.length; i++) {
    const [l, r, c] = coins[i];
    coins[i] = [-r, -l, c];
  }

  result = Math.max(result, solve(coins));
  return result;

  function solve(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = 0;
    let window = 0;
    let j = 0;

    for (let i = 0; i < intervals.length; i++) {
      const [l, r, c] = intervals[i];

      while (j + 1 < n && intervals[j + 1][0] < l + k) {
        const [lj, rj, cj] = intervals[j];
        window += (rj - lj + 1) * cj;
        j++;
      }

      let extra = 0;
      if (j < n && intervals[j][0] < l + k) {
        const [lj, rj, cj] = intervals[j];
        const rightmost = Math.min(l + k - 1, rj);
        const length = rightmost - lj + 1;
        extra = length * cj;
      }

      ans = Math.max(ans, window + extra);
      window -= (r - l + 1) * c;
    }

    return ans;
  }
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
