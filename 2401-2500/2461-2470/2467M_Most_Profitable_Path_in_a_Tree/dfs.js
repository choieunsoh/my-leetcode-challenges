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
  const tree = Array.from({ length: n }, () => []);
  const distanceFromBob = Array(n).fill(n);

  // Form tree with edges
  for (const [u, v] of edges) {
    tree[u].push(v);
    tree[v].push(u);
  }

  return findPaths(0, -1, 0);

  // Depth-First Search (DFS)
  function findPaths(sourceNode, parentNode, time) {
    let maxIncome = 0;
    let maxChild = Number.MIN_SAFE_INTEGER;

    // Track node distances from Bob
    if (sourceNode === bob) {
      distanceFromBob[sourceNode] = 0;
    }

    for (const adjacentNode of tree[sourceNode]) {
      if (adjacentNode === parentNode) continue;

      maxChild = Math.max(maxChild, findPaths(adjacentNode, sourceNode, time + 1));
      distanceFromBob[sourceNode] = Math.min(distanceFromBob[sourceNode], distanceFromBob[adjacentNode] + 1);
    }

    // Alice reaches the node first
    if (distanceFromBob[sourceNode] > time) {
      maxIncome += amount[sourceNode];
    }
    // Alice and Bob reach the node at the same time
    else if (distanceFromBob[sourceNode] === time) {
      maxIncome += Math.floor(amount[sourceNode] / 2);
    }

    // Return max income of leaf node
    return maxChild === Number.MIN_SAFE_INTEGER ? maxIncome : maxIncome + maxChild;
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
