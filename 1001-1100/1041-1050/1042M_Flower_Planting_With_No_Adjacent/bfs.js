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
  const result = new Array(n).fill(0);
  const colors = Array.from({ length: n + 1 }, () => new Array(5).fill(0));
  const visited = new Set();
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of paths) {
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let src = 1; src <= n; src++) {
    if (visited.has(src)) continue;
    bfs(src);
  }

  return result;

  function bfs(src) {
    const queue = [src];
    visited.add(src);
    while (queue.length) {
      const node = queue.shift();
      let clr = 0;
      for (; clr < 4; clr++) {
        if (colors[node][clr] === 0) break;
      }
      colors[node][clr] = 1;
      result[node - 1] = clr + 1;
      for (const x of graph[node]) {
        if (!visited.has(x)) {
          queue.push(x);
          visited.add(x);
        }
        colors[x][clr] = 1;
      }
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
