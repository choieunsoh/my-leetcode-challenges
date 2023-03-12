// 2589. Minimum Time to Complete All Tasks
// https://leetcode.com/problems/minimum-time-to-complete-all-tasks/
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function (tasks) {
  tasks.sort((a, b) => a[1] - b[1]);
  const times = Array(2001).fill(false);
  for (let [start, end, duration] of tasks) {
    for (let i = start; i <= end && duration > 0; i++) {
      if (times[i]) duration--;
    }
    for (let i = end; i >= start && duration > 0; i--) {
      if (!times[i]) {
        times[i] = true;
        duration--;
      }
    }
  }
  return times.filter(Boolean).length;
};

var tasks = [
  [2, 3, 1],
  [4, 5, 1],
  [1, 5, 2],
];
var expected = 2;
var result = findMinimumTime(tasks);
console.log(result, result === expected);

var tasks = [
  [1, 3, 2],
  [2, 5, 3],
  [5, 6, 2],
];
var expected = 4;
var result = findMinimumTime(tasks);
console.log(result, result === expected);
