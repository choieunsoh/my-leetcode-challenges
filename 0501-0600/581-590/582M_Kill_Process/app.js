// 582. Kill Process
// https://leetcode.com/problems/kill-process/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function (pid, ppid, kill) {
  const graph = new Map();
  for (let i = 0; i < pid.length; i++) {
    const parent = ppid[i];
    const child = pid[i];
    if (!graph.has(parent)) {
      graph.set(parent, []);
    }
    graph.get(parent).push(child);
  }

  const result = [];
  let queue = [kill];
  while (queue.length) {
    const newQueue = [];
    for (const pid of queue) {
      result.push(pid);
      if (!graph.has(pid)) continue;
      for (const child of graph.get(pid)) {
        newQueue.push(child);
      }
    }
    queue = newQueue;
  }
  return result;
};

var pid = [1, 3, 10, 5],
  ppid = [3, 0, 5, 3],
  kill = 5;
var expected = [5, 10];
var result = killProcess(pid, ppid, kill);
console.log(result, result.join() === expected.join());

var pid = [1],
  ppid = [0],
  kill = 1;
var expected = [1];
var result = killProcess(pid, ppid, kill);
console.log(result, result.join() === expected.join());
