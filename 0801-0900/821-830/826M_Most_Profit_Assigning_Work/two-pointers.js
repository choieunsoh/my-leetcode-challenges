// 826. Most Profit Assigning Work
// https://leetcode.com/problems/most-profit-assigning-work/
// T.C.: O(n log n + m log m)
// S.C.: O(n)
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const n = difficulty.length;
  const jobs = difficulty.map((diff, i) => [diff, profit[i]]);
  jobs.sort((a, b) => a[0] - b[0]);
  worker.sort((a, b) => a - b);

  let result = 0;
  let maxProfit = 0;
  let index = 0;
  for (const ability of worker) {
    while (index < n && ability >= jobs[index][0]) {
      maxProfit = Math.max(maxProfit, jobs[index][1]);
      index++;
    }
    result += maxProfit;
  }
  return result;
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
