// 3558. Number of Ways to Assign Edge Weights I
// https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-i/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function (edges) {
  const MOD = 1000000007n;
  const n = edges.length + 1;
  const g = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < edges.length; i++) {
    const u = edges[i][0];
    const v = edges[i][1];
    g[u].push(v);
    g[v].push(u);
  }

  const maxDep = dfs(g, 1, 0);
  return qPow(2, maxDep - 1);

  function qPow(x, y) {
    let res = 1n;
    let base = BigInt(x);
    let exp = y;
    while (exp > 0) {
      if (exp & 1) {
        res = (res * base) % MOD;
      }
      base = (base * base) % MOD;
      exp >>= 1;
    }
    return Number(res);
  }

  function dfs(g, x, f) {
    let maxDep = 0;
    for (const y of g[x]) {
      if (y === f) continue;
      maxDep = Math.max(maxDep, dfs(g, y, x) + 1);
    }
    return maxDep;
  }
};

var edges = [[1, 2]];
var expected = 1;
var result = assignEdgeWeights(edges);
console.log(result, result === expected);

var edges = [
  [1, 2],
  [1, 3],
  [3, 4],
  [3, 5],
];
var expected = 2;
var result = assignEdgeWeights(edges);
console.log(result, result === expected);
