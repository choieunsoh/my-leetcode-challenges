// 2323. Find Minimum Time to Finish All Jobs II
// https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/description/
// T.C.: O(n log n + m log m)
// S.C.: O(1)
/**
 * @param {number[]} jobs
 * @param {number[]} workers
 * @return {number}
 */
var minimumTime = function (jobs, workers) {
  let totalDays = 0;
  jobs.sort((a, b) => b - a);
  workers.sort((a, b) => b - a);
  for (let i = 0; i < jobs.length; i++) {
    const daysNeeded = Math.ceil(jobs[i] / workers[i]);
    console.log(i, jobs[i], workers[i], daysNeeded);
    totalDays = Math.max(totalDays, daysNeeded);
  }
  return totalDays;
};

var jobs = [5, 2, 4],
  workers = [1, 7, 5];
var expected = 2;
var result = minimumTime(jobs, workers);
console.log(result, result === expected);

var jobs = [3, 18, 15, 9],
  workers = [6, 5, 1, 3];
var expected = 3;
var result = minimumTime(jobs, workers);
console.log(result, result === expected);
