// 2603. Collect Coins in a Tree
// https://leetcode.com/problems/collect-coins-in-a-tree/
/**
 * @param {number[]} coins
 * @param {number[][]} edges
 * @return {number}
 */
var collectTheCoins = function (coins, edges) {
  const n = coins.length;
  const graph = Array.from({ length: n }, () => []);
  const degree = Array(n).fill(0);
  const visited = Array(n).fill(false);
  const dist = Array(n).fill(0);
  const total = [...coins];
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
    degree[u]++;
    degree[v]++;
  }

  const que = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] > 1) continue;
    // u w dist
    que.push(i);
    visited[i] = true;
  }

  while (que.length) {
    const u = que.shift();
    const w = total[u];
    const d = dist[u];
    for (const v of graph[u]) {
      if (visited[v]) continue;
      total[v] += w;

      if (w > 0) dist[v] = Math.max(dist[v], d + 1);

      degree[v]--;
      if (degree[v] <= 1) {
        if (total[v] === 0) {
          visited[v] = true;
          que.push(v);
        } else {
          if (dist[v] < 2) {
            visited[v] = true;
            que.push(v);
          }
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) res++;
  }

  return Math.max(0, (res - 1) * 2);
};

var coins = [1, 0, 0, 0, 0, 1],
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ];
var expected = 2;
var result = collectTheCoins(coins, edges);
console.log(result, result === expected);

var coins = [0, 0, 0, 1, 1, 0, 0, 1],
  edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [5, 6],
    [5, 7],
  ];
var expected = 2;
var result = collectTheCoins(coins, edges);
console.log(result, result === expected);
