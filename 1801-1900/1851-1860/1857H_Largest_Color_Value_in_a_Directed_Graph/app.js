// 1857. Largest Color Value in a Directed Graph
// https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solution/
/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
  const n = colors.length;
  const adj = Array.from({ length: n }, () => []);
  const indegree = Array(n).fill(0);
  for (const [u, v] of edges) {
    adj[u].push(v);
    indegree[v]++;
  }

  let queue = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const a = 'a'.charCodeAt(0);
  const dp = Array.from({ length: n }, () => Array(26).fill(0));

  let result = 0;
  let visited = 0;
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const u = queue[i];
      const color = colors.charCodeAt(u) - a;
      result = Math.max(result, ++dp[u][color]);
      visited++;

      for (const v of adj[u]) {
        for (let i = 0; i < 26; i++) {
          dp[v][i] = Math.max(dp[v][i], dp[u][i]);
        }

        indegree[v]--;
        if (indegree[v] === 0) {
          newQueue.push(v);
        }
      }
    }
    queue = newQueue;
  }
  return visited === n ? result : -1;
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
