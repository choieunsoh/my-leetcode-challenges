// 502. IPO
// https://leetcode.com/problems/ipo/
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  const n = profits.length;
  let currentCapital = w;
  const minCapital = Math.min(...capital);
  if (currentCapital < minCapital) return currentCapital;

  const maxCapital = Math.max(...capital);
  if (currentCapital >= maxCapital) {
    profits.sort((a, b) => b - a);
    return profits.slice(0, k).reduce((sum, profit) => sum + profit, currentCapital);
  }

  for (let i = 0; i < k && i < n; i++) {
    const [profit, index] = getBestProject(currentCapital);
    if (index === -1) return currentCapital;
    currentCapital += profit;
    profits[index] = 0;
    capital[index] = Number.MAX_VALUE;
  }

  function getBestProject(currentCapital) {
    let maxProfit = 0;
    let maxProfitIndex = -1;
    for (let i = 0; i < n; i++) {
      if (capital[i] > currentCapital) continue;
      if (profits[i] > maxProfit) {
        maxProfit = profits[i];
        maxProfitIndex = i;
      }
    }
    return [maxProfit, maxProfitIndex];
  }

  return currentCapital;
};

var k = 2,
  w = 0,
  profits = [1, 2, 3],
  capital = [0, 1, 1];
var expected = 4;
var result = findMaximizedCapital(k, w, profits, capital);
console.log(result, result === expected);

var k = 3,
  w = 0,
  profits = [1, 2, 3],
  capital = [0, 1, 2];
var expected = 6;
var result = findMaximizedCapital(k, w, profits, capital);
console.log(result, result === expected);
