// 2872. Maximum Number of K-Divisible Components
// https://leetcode.com/problems/maximum-number-of-k-divisible-components/description/
// T.C.: O(m+n)
// S.C.: O(m+n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function (n, edges, values, k) {
  if (n < 2) return 1;

  const graph = Array.from({ length: n }, () => new Set());
  for (const [u, v] of edges) {
    graph[u].add(v);
    graph[v].add(u);
  }

  const queue = [];
  for (let node = 0; node < n; node++) {
    if (graph[node].size === 1) {
      queue.push(node);
    }
  }

  let componentCount = 0;
  while (queue.length) {
    const currentNode = queue.shift();

    // Find the neighbor node
    let neighborNode = -1;
    if (graph[currentNode].size > 0) {
      neighborNode = graph[currentNode].values().next().value;
    }

    if (neighborNode >= 0) {
      // Remove the edge between current and neighbor
      graph[neighborNode].delete(currentNode);
      graph[currentNode].delete(neighborNode);
    }

    // Check divisibility of the current node's value
    if (values[currentNode] % k === 0) {
      componentCount++;
    } else if (neighborNode >= 0) {
      // Add current node's value to the neighbor
      values[neighborNode] += values[currentNode];
    }

    // If the neighbor becomes a leaf node, add it to the queue
    if (neighborNode >= 0 && graph[neighborNode].size === 1) {
      queue.push(neighborNode);
    }
  }

  return componentCount;
};

var n = 5,
  edges = [
    [0, 2],
    [1, 2],
    [1, 3],
    [2, 4],
  ],
  values = [1, 8, 1, 4, 4],
  k = 6;
var expected = 2;
var result = maxKDivisibleComponents(n, edges, values, k);
console.log(result, result === expected);

var n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
  ],
  values = [3, 0, 6, 1, 5, 2, 1],
  k = 3;
var expected = 3;
var result = maxKDivisibleComponents(n, edges, values, k);
console.log(result, result === expected);
