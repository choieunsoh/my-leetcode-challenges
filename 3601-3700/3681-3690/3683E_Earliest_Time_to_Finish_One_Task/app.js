// 3683. Earliest Time to Finish One Task
// https://leetcode.com/problems/earliest-time-to-finish-one-task/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
  let minEndTime = Infinity;
  for (const [start, take] of tasks) {
    minEndTime = Math.min(minEndTime, start + take);
  }
  return minEndTime;
};

var tasks = [
  [1, 6],
  [2, 3],
];
var expected = 5;
var result = earliestTime(tasks);
console.log(result, result === expected);

var tasks = [
  [100, 100],
  [100, 100],
  [100, 100],
];
var expected = 200;
var result = earliestTime(tasks);
console.log(result, result === expected);
