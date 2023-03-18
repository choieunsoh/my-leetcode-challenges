// 547. Number of Provinces
// https://leetcode.com/problems/number-of-provinces/?envType=study-plan&id=algorithm-ii
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let provinces = 0;
  const n = isConnected.length;
  const visited = new Set();
  for (let i = 0; i < n; i++) {
    provinces += dfs(i);
  }
  return provinces;

  function dfs(i) {
    if (visited.has(i)) return 0;
    visited.add(i);
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) {
        dfs(j);
      }
    }
    return 1;
  }
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
