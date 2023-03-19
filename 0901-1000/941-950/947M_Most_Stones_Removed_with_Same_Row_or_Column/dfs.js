// 947. Most Stones Removed with Same Row or Column
// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let result = stones.length;
  const visited = new Set();
  for (const [x, y] of stones) {
    const key = 1e4 * x + y;
    if (visited.has(key)) continue;
    dfs(x, y);
    result--;
  }
  return result;

  function dfs(row, column) {
    const key = 1e4 * row + column;
    if (visited.has(key)) return;
    visited.add(key);
    for (const [x, y] of stones) {
      if (x === row || y === column) dfs(x, y);
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
