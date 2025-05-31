// 909. Snakes and Ladders
// https://leetcode.com/problems/snakes-and-ladders/
// T.C: O(n^2 log n)
// S.C: O(n^2)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  const cells = new Array(n * n + 1);
  let label = 1;
  let columns = Array.from({ length: n }, (_, i) => i);
  for (let row = n - 1; row >= 0; row--) {
    for (const col of columns) {
      cells[label++] = [row, col];
    }
    columns.reverse();
  }

  const dist = new Array(n * n + 1).fill(-1);
  dist[1] = 0;

  const pq = new MinPriorityQueue(({ distance }) => distance);
  pq.enqueue({ distance: 0, label: 1 });

  while (!pq.isEmpty()) {
    const { distance: d, label: curr } = pq.dequeue();
    if (d !== dist[curr]) continue;
    for (let next = curr + 1; next <= Math.min(curr + 6, n * n); next++) {
      const [row, col] = cells[next];
      const destination = board[row][col] !== -1 ? board[row][col] : next;
      if (dist[destination] === -1 || dist[curr] + 1 < dist[destination]) {
        dist[destination] = dist[curr] + 1;
        pq.enqueue({ distance: dist[destination], label: destination });
      }
    }
  }
  return dist[n * n];
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
