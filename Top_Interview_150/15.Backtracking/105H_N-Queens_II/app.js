// 52. N-Queens II
// https://leetcode.com/problems/n-queens-ii/
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const diagonals = new Set();
  const antiDiagonals = new Set();
  const cols = new Set();
  return backtrack(0);

  function backtrack(row) {
    if (n === row) {
      return 1;
    }

    let count = 0;
    for (let col = 0; col < n; col++) {
      const currDiagonal = row - col;
      const currAntiDiagonal = row + col;

      if (cols.has(col) || diagonals.has(currDiagonal) || antiDiagonals.has(currAntiDiagonal)) {
        continue;
      }

      cols.add(col);
      diagonals.add(currDiagonal);
      antiDiagonals.add(currAntiDiagonal);

      count += backtrack(row + 1);

      cols.delete(col);
      diagonals.delete(currDiagonal);
      antiDiagonals.delete(currAntiDiagonal);
    }
    return count;
  }
};

var n = 4,
  expected = 2;
var result = totalNQueens(n);
console.log(result, result === expected);

var n = 1,
  expected = 1;
var result = totalNQueens(n);
console.log(result, result === expected);
