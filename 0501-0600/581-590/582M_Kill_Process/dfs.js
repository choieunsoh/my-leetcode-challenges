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

  const result = [kill];
  findAllChildProcesses(kill);
  return result;

  function findAllChildProcesses(pid) {
    if (!graph.has(pid)) return;
    for (const child of graph.get(pid)) {
      result.push(child);
      findAllChildProcesses(child);
    }
  }
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
