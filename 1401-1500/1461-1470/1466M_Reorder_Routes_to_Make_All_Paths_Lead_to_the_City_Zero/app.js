// 1466. Reorder Routes to Make All Paths Lead to the City Zero
// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const roads = Array.from({ length: n }, () => []);
  const cities = Array.from({ length: n }, () => new Set());
  const visited = Array(n).fill(false);
  for (const [a, b] of connections) {
    roads[a].push(b);
    roads[b].push(a);
    cities[a].add(b);
  }
  let result = 0;
  dfs(0);
  return result;

  function dfs(city) {
    if (visited[city]) return;
    visited[city] = true;
    for (const next of roads[city]) {
      if (visited[next]) continue;
      if (!cities[next].has(city)) result++;
      dfs(next);
    }
  }
};

var n = 6,
  connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ];
var expected = 3;
var result = minReorder(n, connections);
console.log(result, result === expected);

var n = 5,
  connections = [
    [1, 0],
    [1, 2],
    [3, 2],
    [3, 4],
  ];
var expected = 2;
var result = minReorder(n, connections);
console.log(result, result === expected);

var n = 3,
  connections = [
    [1, 0],
    [2, 0],
  ];
var expected = 0;
var result = minReorder(n, connections);
console.log(result, result === expected);
