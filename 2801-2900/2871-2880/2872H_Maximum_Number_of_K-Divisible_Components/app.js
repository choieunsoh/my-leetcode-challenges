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
  let count = 0;
  const adjList = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }
  dfs(0, -1);

  return count;

  function dfs(node, parent) {
    let sum = 0;
    for (const neighbor of adjList[node]) {
      if (neighbor === parent) continue;
      sum += dfs(neighbor, node);
    }
    sum += values[node];
    if (sum % k === 0) count++;
    return sum;
  }
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
