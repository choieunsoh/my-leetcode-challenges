// 688. Knight Probability in Chessboard
// https://leetcode.com/problems/knight-probability-in-chessboard/
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  const directions = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  let dp = Array.from({ length: n }, () => new Array(n).fill(0));
  dp[row][column] = 1;

  for (let move = 1; move <= k; move++) {
    const next = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (const [r, c] of directions) {
          const prevRow = i - r;
          const prevColumn = j - c;
          if (prevRow < 0 || prevRow >= n || prevColumn < 0 || prevColumn >= n) continue;
          next[i][j] += dp[prevRow][prevColumn] / 8;
        }
      }
    }
    dp = next;
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += dp[i][j];
    }
  }
  return result;
};

var n = 3,
  k = 2,
  row = 0,
  column = 0;
var expected = 0.0625;
var result = knightProbability(n, k, row, column);
console.log(result, result === expected);

var n = 1,
  k = 0,
  row = 0,
  column = 0;
var expected = 1.0;
var result = knightProbability(n, k, row, column);
console.log(result, result === expected);
