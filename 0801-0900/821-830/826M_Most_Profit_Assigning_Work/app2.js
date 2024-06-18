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
  const jobs = profit.map((gain, i) => [gain, difficulty[i]]);
  jobs.push([0, 0]);
  jobs.sort((a, b) => b[0] - a[0]);
  for (let i = 1; i < n; i++) {
    jobs[i][1] = Math.min(jobs[i - 1][1], jobs[i][1]);
  }

  let result = 0;
  for (const ability of worker) {
    const gain = binarySearch(ability);
    result += gain;
  }
  return result;

  function binarySearch(target) {
    let jobProfit = 0;
    let left = 0;
    let right = n - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const [gain, diff] = jobs[mid];
      if (diff <= target) {
        jobProfit = Math.max(jobProfit, gain);
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return jobProfit;
  }
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
