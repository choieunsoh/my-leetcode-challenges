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
  let maxIncome = Number.MIN_SAFE_INTEGER;
  const n = amount.length;
  const adj = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const bobPath = new Map();
  const visited = new Set();
  findBobPath(bob, 0);

  visited.clear();

  const queue = [[0, 0, 0]];
  while (queue.length > 0) {
    const node = queue.shift();
    const [sourceNode, time] = node;
    let income = node[2];

    if (!bobPath.has(sourceNode) || time < bobPath.get(sourceNode)) {
      income += amount[sourceNode];
    } else if (time === bobPath.get(sourceNode)) {
      income += Math.floor(amount[sourceNode] / 2);
    }

    if (adj[sourceNode].length === 1 && sourceNode !== 0) {
      maxIncome = Math.max(maxIncome, income);
    }

    for (const adjacentNode of adj[sourceNode]) {
      if (!visited.has(adjacentNode)) {
        queue.push([adjacentNode, time + 1, income]);
      }
    }

    visited.add(sourceNode);
  }

  return maxIncome;

  function findBobPath(node, time) {
    bobPath.set(node, time);
    visited.add(node);

    if (node === 0) return true;

    for (const neighbor of adj[node]) {
      if (visited.has(neighbor)) continue;

      if (findBobPath(neighbor, time + 1)) {
        return true;
      }
    }

    bobPath.delete(node);
    return false;
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
