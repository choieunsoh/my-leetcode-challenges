// 547. Number of Provinces
// https://leetcode.com/problems/number-of-provinces/?envType=study-plan&id=algorithm-ii
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const adj = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        adj[i].push(j);
        adj[j].push(i);
      }
    }
  }

  let provinces = 0;
  const visited = Array(n).fill(false);
  for (let city = 0; city < n; city++) {
    if (!visited[city]) {
      provinces++;
      dfs(city);
    }
  }

  function dfs(index) {
    visited[index] = true;
    for (const city of adj[index]) {
      if (!visited[city]) dfs(city);
    }
  }

  return provinces;
};

var isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
var expected = 2;
var result = findCircleNum(isConnected);
console.log(result, result === expected);

var isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
var expected = 3;
var result = findCircleNum(isConnected);
console.log(result, result === expected);

var isConnected = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];
var expected = 1;
var result = findCircleNum(isConnected);
console.log(result, result === expected);
