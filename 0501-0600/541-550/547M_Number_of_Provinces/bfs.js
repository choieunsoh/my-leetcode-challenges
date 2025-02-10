// 547. Number of Provinces
// https://leetcode.com/problems/number-of-provinces/?envType=study-plan&id=algorithm-ii
// T.C: O(n^2)
// S.C: O(n)
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let provinces = 0;
  const n = isConnected.length;
  const visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      provinces++;
      bfs(i);
    }
  }
  return provinces;

  function bfs(node) {
    const queue = [node];
    visited[node] = true;

    while (queue.length) {
      node = queue.shift();
      for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[node][i] === 1 && !visited[i]) {
          queue.push(i);
          visited[i] = true;
        }
      }
    }
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
