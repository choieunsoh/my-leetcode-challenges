// 2432. The Employee That Worked on the Longest Task
// https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let result = logs[0][0];
  let longestDuration = logs[0][1];
  for (let i = 1; i < logs.length; i++) {
    const duration = logs[i][1] - logs[i - 1][1];
    if (duration > longestDuration) {
      result = logs[i][0];
      longestDuration = duration;
    } else if (duration === longestDuration) {
      result = Math.min(result, logs[i][0]);
    }
  }
  return result;
};

var n = 10,
  logs = [
    [0, 3],
    [2, 5],
    [0, 9],
    [1, 15],
  ];
var expected = 1;
var result = hardestWorker(n, logs);
console.log(result, result === expected);

var n = 26,
  logs = [
    [1, 1],
    [3, 7],
    [2, 12],
    [7, 17],
  ];
var expected = 3;
var result = hardestWorker(n, logs);
console.log(result, result === expected);

var n = 2,
  logs = [
    [0, 10],
    [1, 20],
  ];
var expected = 0;
var result = hardestWorker(n, logs);
console.log(result, result === expected);
