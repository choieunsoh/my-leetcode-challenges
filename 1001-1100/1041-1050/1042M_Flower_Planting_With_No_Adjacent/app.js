// 1042. Flower Planting With No Adjacent
// https://leetcode.com/problems/flower-planting-with-no-adjacent/description/
// T.C.: O(E*V)
// S.C.: O(E*V)
/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  const colors = new Array(n + 1).fill(-1);

  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of paths) {
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let i = 1; i <= n; i++) {
    if (colors[i] === -1) dfs(i);
  }

  return colors.slice(1);

  function dfs(i) {
    let color = 0;
    let found = false;
    while (!found) {
      color++;
      found = true;
      for (const neighbor of graph[i]) {
        if (colors[neighbor] === color) {
          found = false;
          break;
        }
      }
    }

    colors[i] = color;
    for (const neighbor of graph[i]) {
      if (colors[neighbor] === -1) dfs(neighbor);
    }
  }
};

var n = 3,
  paths = [
    [1, 2],
    [2, 3],
    [3, 1],
  ];
var expected = [1, 2, 3];
var result = gardenNoAdj(n, paths);
console.log(result, result.sort().join() === expected.sort().join());

var n = 4,
  paths = [
    [1, 2],
    [3, 4],
  ];
var expected = [1, 2, 1, 2];
var result = gardenNoAdj(n, paths);
console.log(result, result.sort().join() === expected.sort().join());

var n = 4,
  paths = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1],
    [1, 3],
    [2, 4],
  ];
var expected = [1, 2, 3, 4];
var result = gardenNoAdj(n, paths);
console.log(result, result.sort().join() === expected.sort().join());
