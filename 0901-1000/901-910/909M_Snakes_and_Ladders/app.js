// 909. Snakes and Ladders
// https://leetcode.com/problems/snakes-and-ladders/
/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  const nn = n * n;
  const cells = [[1, 0]];
  const visited = Array(nn).fill(false);
  visited[0] = true;
  while (cells.length) {
    let [cell, result] = cells.shift();
    const [r, c] = findCoordinates(cell);
    if (board[r][c] !== -1) {
      cell = board[r][c];
    }
    if (cell === nn) return result;

    result++;

    for (let dice = 6; dice > 0; dice--) {
      const next = cell + dice;
      if (visited[next] || next > nn) continue;
      visited[next] = true;
      cells.push([next, result]);
    }
  }

  function findCoordinates(pos) {
    pos--;
    const i = Math.floor(pos / n);
    const j = pos % n;
    return [n - i - 1, i % 2 ? n - 1 - j : j];
  }

  return -1;
};

var board = [
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 35, -1, -1, 13, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 15, -1, -1, -1, -1],
];
var expected = 4;
var result = snakesAndLadders(board);
console.log(result, result === expected);

var board = [
  [-1, -1],
  [-1, 3],
];
var expected = 1;
var result = snakesAndLadders(board);
console.log(result, result === expected);
