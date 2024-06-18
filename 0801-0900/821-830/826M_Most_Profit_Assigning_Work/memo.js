// 826. Most Profit Assigning Work
// https://leetcode.com/problems/most-profit-assigning-work/
// T.C.: O(n + m + maxAbility)
// S.C.: O(maxAbility)
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const n = difficulty.length;
  const maxAbility = Math.max(...worker);
  const jobs = new Array(maxAbility + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (difficulty[i] <= maxAbility) {
      jobs[difficulty[i]] = Math.max(jobs[difficulty[i]], profit[i]);
    }
  }

  for (let i = 1; i <= maxAbility; i++) {
    jobs[i] = Math.max(jobs[i], jobs[i - 1]);
  }

  let netProfit = 0;
  for (const ability of worker) {
    netProfit += jobs[ability];
  }
  return netProfit;
};

var difficulty = [2, 4, 6, 8, 10],
  profit = [10, 20, 30, 40, 50],
  worker = [4, 5, 6, 7];
var expected = 100;
var result = maxProfitAssignment(difficulty, profit, worker);
console.log(result, result === expected);

var difficulty = [85, 47, 57],
  profit = [24, 66, 99],
  worker = [40, 25, 25];
var expected = 0;
var result = maxProfitAssignment(difficulty, profit, worker);
console.log(result, result === expected);

var difficulty = [68, 35, 52, 47, 86],
  profit = [67, 17, 1, 81, 3],
  worker = [92, 10, 85, 84, 82];
var expected = 324;
var result = maxProfitAssignment(difficulty, profit, worker);
console.log(result, result === expected);
