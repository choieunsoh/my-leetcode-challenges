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

  const inDegree = new Array(n).fill(0);
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
    inDegree[u]++;
    inDegree[v]++;
  }

  const queue = [];
  for (let node = 0; node < n; node++) {
    if (inDegree[node] === 1) {
      queue.push(node);
    }
  }

  let componentCount = 0;
  while (queue.length) {
    const currentNode = queue.shift();
    inDegree[currentNode]--;

    let currentValue = 0;

    // Check divisibility of the current node's value
    if (values[currentNode] % k === 0) {
      componentCount++;
    } else {
      currentValue = values[currentNode];
    }

    // Propagate the value to the neighbor nodes
    for (let neighborNode of graph[currentNode]) {
      if (inDegree[neighborNode] === 0) {
        continue;
      }

      inDegree[neighborNode]--;
      values[neighborNode] += currentValue;

      // If the neighbor node's in-degree becomes 1, add it to the queue
      if (inDegree[neighborNode] === 1) {
        queue.push(neighborNode);
      }
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
