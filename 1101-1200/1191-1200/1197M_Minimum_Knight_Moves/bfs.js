// 1197. Minimum Knight Moves
// https://leetcode.com/problems/minimum-knight-moves/description/
// T.C.: O((MAX|x*y|)^2)
// S.C.: O((MAX|x*y|)^2)
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
  [x, y] = [Math.abs(x), Math.abs(y)];
  const dirs = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  const visited = new Set();
  let steps = 0;
  let queue = [[0, 0]];
  while (queue.length) {
    const newQueue = [];
    for (const [row, col] of queue) {
      if (row < -1 || col < -1) continue;

      const key = `${row},${col}`;
      if (visited.has(key)) continue;

      visited.add(key);
      if (row === x && col === y) return steps;

      for (const [dx, dy] of dirs) {
        const [newRow, newCol] = [row + dx, col + dy];
        const newKey = `${newRow},${newCol}`;
        if (!visited.has(newKey)) newQueue.push([newRow, newCol]);
      }
    }

    steps++;
    queue = newQueue;
  }

  return steps;
};

var x = 2,
  y = 1;
var expected = 1;
var result = minKnightMoves(x, y);
console.log(result, result === expected);

var x = 5,
  y = 5;
var expected = 4;
var result = minKnightMoves(x, y);
console.log(result, result === expected);

var x = 209,
  y = -58;
var expected = 105;
var result = minKnightMoves(x, y);
console.log(result, result === expected);
