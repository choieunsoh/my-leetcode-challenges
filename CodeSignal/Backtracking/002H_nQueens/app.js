// nQueens
// LC-51. N-Queens
// https://leetcode.com/problems/n-queens/
/**
 * @param {number} n
 * @return {number[][]}
 */
function solution(n) {
  const result = [];
  const grid = Array.from({ length: n }, () => Array(n).fill(0));
  dfs(0, []);
  return result;

  function dfs(i, part) {
    if (part.length === n) {
      result.push([...part]);
      return;
    }

    for (let j = 0; j < n; j++) {
      if (!canMove(i, j)) continue;
      grid[i][j] = 1;
      dfs(i + 1, [...part, j + 1]);
      grid[i][j] = 0;
    }
  }

  function canMove(i, j) {
    for (let row = 0; row < n; row++) {
      if (grid[row][j] === 1) return false;
    }
    let row = i;
    let col = j;
    while (row >= 0 && col < n) {
      if (grid[row--][col++] === 1) return false;
    }
    row = i;
    col = j;
    while (row >= 0 && col >= 0) {
      if (grid[row--][col--] === 1) return false;
    }
    return true;
  }
}

var n = 4;
var expected = [
  [2, 4, 1, 3],
  [3, 1, 4, 2],
];
var result = solution(n);
console.log(result, result.join() === expected.join());
return;

var n = 1;
var expected = [[1]];
var result = solution(n);
console.log(result, result.join() === expected.join());
