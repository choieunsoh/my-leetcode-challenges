// 1857. Largest Color Value in a Directed Graph
// https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solution/
// T.C.: O(n + m)
// S.C.: O(n + m)
/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
  const n = colors.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
  }

  const MAX = Number.MAX_SAFE_INTEGER;
  const a = 'a'.charCodeAt(0);
  const dp = Array.from({ length: n }, () => Array(26).fill(0));
  const visited = Array(n).fill(false);
  const seen = new Set();

  let result = 0;
  for (let node = 0; node < n; node++) {
    result = Math.max(result, dfs(node));
  }
  return result === MAX ? -1 : result;

  function dfs(node) {
    if (seen.has(node)) return MAX;

    const color = colors.charCodeAt(node) - a;
    if (visited[node]) {
      return dp[node][color];
    }

    visited[node] = true;
    seen.add(node);

    if (adj[node].length) {
      for (const neighbor of adj[node]) {
        if (dfs(neighbor) === MAX) return MAX;

        for (let i = 0; i < 26; i++) {
          dp[node][i] = Math.max(dp[node][i], dp[neighbor][i]);
        }
      }
    }

    dp[node][color]++;
    seen.delete(node);

    return dp[node][color];
  }
};

var colors = 'abaca',
  edges = [
    [0, 1],
    [0, 2],
    [2, 3],
    [3, 4],
  ];
var expected = 3;
var result = largestPathValue(colors, edges);
console.log(result, result === expected);

var colors = 'a',
  edges = [[0, 0]];
var expected = -1;
var result = largestPathValue(colors, edges);
console.log(result, result === expected);
