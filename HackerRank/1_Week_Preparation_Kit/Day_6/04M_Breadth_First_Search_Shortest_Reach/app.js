// Breadth First Search: Shortest Reach
// https://www.hackerrank.com/challenges/bfsshortreach/problem

/*
 * Complete the 'bfs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. 2D_INTEGER_ARRAY edges
 *  4. INTEGER s
 */

function bfs(n, m, edges, s) {
  // Write your code here
  const dist = new Array(n + 1).fill(-1);
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const seen = new Set([s]);
  let queue = [s];
  dist[s] = 0;

  while (queue.length) {
    const qq = [];
    for (const node of queue) {
      for (const nie of adj[node]) {
        if (seen.has(nie)) continue;
        dist[nie] = dist[node] + 6;
        seen.add(nie);
        qq.push(nie);
      }
    }
    queue = qq;
  }

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i !== s) result.push(dist[i]);
  }
  return result;
}

var n = 5,
  m = 3,
  edges = [
    [1, 2],
    [1, 3],
    [3, 4],
  ],
  s = 1;
var expected = [6, 6, 12, -1];
var result = bfs(n, m, edges, s);
console.log(result, result.join() === expected.join());
