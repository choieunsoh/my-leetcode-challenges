// 1443. Minimum Time to Collect All Apples in a Tree
// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  if (n === 1) return 0;

  const apples = [];
  for (let i = 0; i < hasApple.length; i++) {
    if (hasApple[i]) apples.push(i);
  }
  const adj = [];
  for (const [from, to] of edges) {
    adj[to] = from;
  }

  const visited = new Set();
  let count = 0;
  for (const node of apples) {
    visited.add(node);
    let from = adj[node];
    count += 2;
    while (from !== 0 && !visited.has(from)) {
      visited.add(from);
      from = adj[from];
      count += 2;
    }
  }
  return count;
};

var n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ],
  hasApple = [false, false, true, false, true, true, false];
var expected = 8;
var result = minTime(n, edges, hasApple);
console.log(result, result === expected);

var n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ],
  hasApple = [false, false, true, false, false, true, false];
var expected = 6;
var result = minTime(n, edges, hasApple);
console.log(result, result === expected);

var n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ],
  hasApple = [false, false, false, false, false, false, false];
var expected = 0;
var result = minTime(n, edges, hasApple);
console.log(result, result === expected);
