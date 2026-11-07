// 1882. Process Tasks Using Servers
// https://leetcode.com/problems/process-tasks-using-servers/description/
// T.C.: O(m + n log m)
// S.C.: O(m)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function (servers, tasks) {
  // Busy servers: store [completion time, server index]
  const busy = new MinPriorityQueue({
    compare: (a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    },
  });

  // Idle servers: store [weight, index]
  const idle = new MinPriorityQueue({
    compare: (a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    },
  });

  for (let i = 0; i < servers.length; i++) {
    idle.enqueue([servers[i], i]);
  }
  let currentTime = 0;
  const result = [];

  // Move servers with t<=ts from priority queue busy to priority queue idle one by one
  const release = () => {
    while (!busy.isEmpty() && busy.front()[0] <= currentTime) {
      const [, idx] = busy.dequeue();
      idle.enqueue([servers[idx], idx]);
    }
  };

  for (let i = 0; i < tasks.length; i++) {
    currentTime = Math.max(currentTime, i);
    release();
    if (idle.isEmpty()) {
      currentTime = busy.front()[0];
      release();
    }

    const [, idx] = idle.dequeue();
    result.push(idx);
    busy.enqueue([currentTime + tasks[i], idx]);
  }

  return result;
};

var servers = [3, 3, 2],
  tasks = [1, 2, 3, 2, 1, 2];
var expected = [2, 2, 0, 2, 1, 2];
var result = assignTasks(servers, tasks);
console.log(result, result.toString() === expected.toString());

var servers = [5, 1, 4, 3, 2],
  tasks = [2, 1, 2, 4, 5, 2, 1];
var expected = [1, 4, 1, 4, 1, 3, 2];
var result = assignTasks(servers, tasks);
console.log(result, result.toString() === expected.toString());
