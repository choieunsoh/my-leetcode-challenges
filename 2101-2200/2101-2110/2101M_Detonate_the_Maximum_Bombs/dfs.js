// 2101. Detonate the Maximum Bombs
// https://leetcode.com/problems/detonate-the-maximum-bombs/
/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
  const n = bombs.length;
  const adj = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const [x1, y1, r] = bombs[i];
      const [x2, y2] = bombs[j];
      const distance = (x2 - x1) ** 2 + (y2 - y1) ** 2;
      const r2 = r ** 2;
      if (r2 >= distance) {
        const list = adj.get(i) ?? [];
        list.push(j);
        adj.set(i, list);
      }
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const count = dfs(i, new Set());
    result = Math.max(result, count);
  }
  return result;

  function dfs(i, visited) {
    visited.add(i);
    let count = 1;
    const list = adj.get(i) ?? [];
    for (const next of list) {
      if (visited.has(next)) continue;
      count += dfs(next, visited);
    }
    return count;
  }
};

var bombs = [
  [2, 1, 3],
  [6, 1, 4],
];
var expected = 2;
var result = maximumDetonation(bombs);
console.log(result, result === expected);

var bombs = [
  [1, 1, 5],
  [10, 10, 5],
];
var expected = 1;
var result = maximumDetonation(bombs);
console.log(result, result === expected);

var bombs = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 4, 2],
  [4, 5, 3],
  [5, 6, 4],
];
var expected = 5;
var result = maximumDetonation(bombs);
console.log(result, result === expected);
