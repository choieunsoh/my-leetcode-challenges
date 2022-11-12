// 621. Task Scheduler
// https://leetcode.com/problems/task-scheduler/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  return 0;
};

var tasks = ['A', 'A', 'A', 'B', 'B', 'B'],
  n = 2;
var expected = 8;
var actual = leastInterval(tasks, n);
console.log(actual, actual === expected);

var tasks = ['A', 'A', 'A', 'B', 'B', 'B'],
  n = 0;
var expected = 6;
var actual = leastInterval(tasks, n);
console.log(actual, actual === expected);

var tasks = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
  n = 2;
var expected = 16;
var actual = leastInterval(tasks, n);
console.log(actual, actual === expected);
