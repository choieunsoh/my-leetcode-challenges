// 2244. Minimum Rounds to Complete All Tasks
// https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/
/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let rounds = 0;
  const taskCount = new Map();
  for (const task of tasks) {
    const count = taskCount.get(task) ?? 0;
    taskCount.set(task, count + 1);
  }
  for (const [, count] of taskCount) {
    if (count === 1) return -1;
    rounds += Math.ceil(count / 3);
  }

  return rounds;
};

var tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
var expected = 4;
var result = minimumRounds(tasks);
console.log(result, result === expected);

var tasks = [2, 3, 3];
var expected = -1;
var result = minimumRounds(tasks);
console.log(result, result === expected);
