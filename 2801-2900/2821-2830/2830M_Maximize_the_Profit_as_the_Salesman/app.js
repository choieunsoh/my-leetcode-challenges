// 2830. Maximize the Profit as the Salesman
// https://leetcode.com/problems/maximize-the-profit-as-the-salesman/
/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
var maximizeTheProfit = function (n, offers) {
  const dp = new Array(n + 1).fill(0);
  const map = Array.from({ length: n }, () => []);
  for (const offer of offers) {
    const [, end] = offer;
    map[end].push(offer);
  }

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1];
    for (const [start, , profit] of map[i - 1]) {
      dp[i] = Math.max(dp[i], dp[start] + profit);
    }
  }
  return dp[n];
};

var n = 5,
  offers = [
    [0, 0, 1],
    [0, 2, 2],
    [1, 3, 2],
  ];
var expected = 3;
var result = maximizeTheProfit(n, offers);
console.log(result, result === expected);

var n = 5,
  offers = [
    [0, 0, 1],
    [0, 2, 10],
    [1, 3, 2],
  ];
var expected = 10;
var result = maximizeTheProfit(n, offers);
console.log(result, result === expected);
