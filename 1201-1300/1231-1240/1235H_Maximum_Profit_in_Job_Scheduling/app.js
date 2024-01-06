// 1235. Maximum Profit in Job Scheduling
// https://leetcode.com/problems/maximum-profit-in-job-scheduling/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length;
  const jobs = startTime.map((start, i) => [start, endTime[i], profit[i]]);
  jobs.sort((a, b) => a[0] - b[0]);
  const memo = new Array(50001).fill(-1);
  return findProfit(0);

  function findNextJon(lastEndingTime) {
    let start = 0;
    let end = jobs.length - 1;
    let nextIndex = jobs.length;
    while (start <= end) {
      const mid = (start + end) >> 1;
      if (jobs[mid][0] >= lastEndingTime) {
        nextIndex = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return nextIndex;
  }

  function findProfit(index) {
    if (index === n) {
      return 0;
    }

    if (memo[index] !== -1) {
      return memo[index];
    }

    const nextIndex = findNextJon(jobs[index][1]);
    const skip = findProfit(index + 1);
    const take = jobs[index][2] + findProfit(nextIndex);
    const maxProfit = Math.max(skip, take);
    memo[index] = maxProfit;
    return maxProfit;
  }
};

var startTime = [1, 2, 3, 3],
  endTime = [3, 4, 5, 6],
  profit = [50, 10, 40, 70];
var expected = 120;
var result = jobScheduling(startTime, endTime, profit);
console.log(result, result === expected);

var startTime = [1, 2, 3, 4, 6],
  endTime = [3, 5, 10, 6, 9],
  profit = [20, 20, 100, 70, 60];
var expected = 150;
var result = jobScheduling(startTime, endTime, profit);
console.log(result, result === expected);

var startTime = [1, 1, 1],
  endTime = [2, 3, 4],
  profit = [5, 6, 4];
var expected = 6;
var result = jobScheduling(startTime, endTime, profit);
console.log(result, result === expected);
