// 947. Most Stones Removed with Same Row or Column
// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const n = stones.length;
  let numberOfRemovedStones = n;

  const graph = Array.from({ length: n }, () => []);
  for (let u = 0; u < n; u++) {
    for (let v = u + 1; v < n; v++) {
      if (stones[u][0] === stones[v][0] || stones[u][1] === stones[v][1]) {
        graph[u].push(v);
        graph[v].push(u);
      }
    }
  }

  const visited = new Array(n).fill(false);
  for (let stone = 0; stone < n; stone++) {
    if (visited[stone]) continue;
    dfs(stone);
    numberOfRemovedStones--;
  }

  return numberOfRemovedStones;

  function dfs(stone, row, column) {
    visited[stone] = true;
    for (const neighbor of graph[stone]) {
      if (visited[neighbor]) continue;
      dfs(neighbor);
    }
  }
};

var stones = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2],
];
var expected = 5;
var result = removeStones(stones);
console.log(result, result === expected);

var stones = [
  [0, 0],
  [0, 2],
  [1, 1],
  [2, 0],
  [2, 2],
];
var expected = 3;
var result = removeStones(stones);
console.log(result, result === expected);

var stones = [[0, 0]];
var expected = 0;
var result = removeStones(stones);
console.log(result, result === expected);
