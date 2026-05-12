// 1665. Minimum Initial Energy to Finish Tasks
// https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/description/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function (tasks) {
  tasks.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
  let result = 0;
  let remain = 0;
  for (const [actual, minimum] of tasks) {
    if (remain <= minimum) {
      result += minimum - remain;
    }
    remain = Math.max(minimum - actual, remain - actual);
  }
  return result;
};

var tasks = [
  [1, 2],
  [2, 4],
  [4, 8],
];
var expected = 8;
var result = minimumEffort(tasks);
console.log(result, result === expected);

var tasks = [
  [1, 3],
  [2, 4],
  [10, 11],
  [10, 12],
  [8, 9],
];
var expected = 32;
var result = minimumEffort(tasks);
console.log(result, result === expected);

var tasks = [
  [1, 7],
  [2, 8],
  [3, 9],
  [4, 10],
  [5, 11],
  [6, 12],
];
var expected = 27;
var result = minimumEffort(tasks);
console.log(result, result === expected);
