// 2467. Most Profitable Path in a Tree
// https://leetcode.com/problems/most-profitable-path-in-a-tree/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  const n = amount.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const bobPath = findBobPath(adj, bob, 0);
  const bobPathTime = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < bobPath.length; i++) {
    bobPathTime[bobPath[i]] = i;
  }

  let maxAliceIncome = Number.MIN_SAFE_INTEGER;
  const visited = new Array(n).fill(false);
  const queue = [[0, 0, 0]];
  while (queue.length) {
    const [node, time, income] = queue.shift();

    let newIncome = income;
    const bobTime = bobPathTime[node];
    if (bobTime > time) {
      newIncome += amount[node];
    } else if (bobTime === time) {
      newIncome += amount[node] / 2;
    }

    if (node !== 0 && adj[node].length === 1) {
      maxAliceIncome = Math.max(maxAliceIncome, newIncome);
    }

    for (const neighbor of adj[node]) {
      if (visited[neighbor]) continue;
      queue.push([neighbor, time + 1, newIncome]);
    }

    visited[node] = true;
  }
  return maxAliceIncome;

  function findBobPath(adj, start, target) {
    const queue = [[start, [start]]];
    const visited = new Array(n).fill(false);
    while (queue.length) {
      const [node, path] = queue.shift();

      if (node === target) return path;

      visited[node] = true;

      for (const neighbor of adj[node]) {
        if (visited[neighbor]) continue;
        queue.push([neighbor, [...path, neighbor]]);
      }
    }
    return null;
  }
};

var edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
  ],
  bob = 3,
  amount = [-2, 4, 2, -4, 6];
var expected = 6;
var result = mostProfitablePath(edges, bob, amount);
console.log(result, result === expected);

var edges = [[0, 1]],
  bob = 1,
  amount = [-7280, 2350];
var expected = -7280;
var result = mostProfitablePath(edges, bob, amount);
console.log(result, result === expected);
