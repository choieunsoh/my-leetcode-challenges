// 1301. Number of Paths with Max Score
// https://leetcode.com/problems/number-of-paths-with-max-score/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function (board) {
  const MOD = 1000000007;
  const n = board.length;
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => [-1, 0]));
  dp[n - 1][n - 1][0] = 0;
  dp[n - 1][n - 1][1] = 1;

  const update = (x, y, u, v) => {
    if (u >= n || v >= n || dp[u][v][0] === -1) {
      return;
    }
    if (dp[u][v][0] > dp[x][y][0]) {
      dp[x][y][0] = dp[u][v][0];
      dp[x][y][1] = dp[u][v][1];
    } else if (dp[u][v][0] === dp[x][y][0]) {
      dp[x][y][1] = (dp[x][y][1] + dp[u][v][1]) % MOD;
    }
  };

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (!(i === n - 1 && j === n - 1) && board[i][j] !== 'X') {
        update(i, j, i + 1, j);
        update(i, j, i, j + 1);
        update(i, j, i + 1, j + 1);
        if (dp[i][j][0] !== -1) {
          dp[i][j][0] += board[i][j] === 'E' ? 0 : parseInt(board[i][j]);
        }
      }
    }
  }
  if (dp[0][0][0] !== -1) {
    return [dp[0][0][0], dp[0][0][1] % MOD];
  }
  return [0, 0];
};

var board = ['E23', '2X2', '12S'];
var expected = [7, 1];
var result = pathsWithMaxScore(board);
console.log(result, result.join() === expected.join());

var board = ['E12', '1X1', '21S'];
var expected = [4, 2];
var result = pathsWithMaxScore(board);
console.log(result, result.join() === expected.join());

var board = ['E11', 'XXX', '11S'];
var expected = [0, 0];
var result = pathsWithMaxScore(board);
console.log(result, result.join() === expected.join());
