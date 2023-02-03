// 909. Snakes and Ladders
// https://leetcode.com/problems/snakes-and-ladders/
/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  let result = 0;
  const n = board.length;
  const cells = [1];
  const visited = Array(n)
    .fill(0)
    .map(() => Array(n));
  visited[n - 1][0] = true;
  while (cells.length) {
    const size = cells.length;
    for (let i = 0; i < size; i++) {
      const cell = cells.shift();
      if (cell === n * n) return result;

      for (let j = 1; j <= 6; j++) {
        const nextCell = cell + j;
        if (nextCell > n * n) break;

        const [row, col] = findCoordinates(nextCell);
        if (visited[row][col]) continue;
        visited[row][col] = true;
        if (board[row][col] === -1) {
          cells.push(nextCell);
        } else {
          cells.push(board[row][col]);
        }
      }
    }
    result++;
  }

  function findCoordinates(cell) {
    const row = n - Math.floor((cell - 1) / n) - 1;
    const col = (cell - 1) % n;
    if (row % 2 === n % 2) return [row, n - col - 1];
    return [row, col];
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
