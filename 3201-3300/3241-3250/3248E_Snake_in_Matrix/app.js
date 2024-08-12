// 3248. Snake in Matrix
// https://leetcode.com/problems/snake-in-matrix/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  const DIRS = {
    UP: [-1, 0],
    DOWN: [1, 0],
    LEFT: [0, -1],
    RIGHT: [0, 1],
  };
  let row = 0;
  let col = 0;
  for (const command of commands) {
    const [moveRow, moveCol] = DIRS[command];
    row += moveRow;
    col += moveCol;
  }

  return row * n + col;
};

var n = 2,
  commands = ['RIGHT', 'DOWN'];
var expected = 3;
var result = finalPositionOfSnake(n, commands);
console.log(result, result === expected);

var n = 3,
  commands = ['DOWN', 'RIGHT', 'UP'];
var expected = 1;
var result = finalPositionOfSnake(n, commands);
console.log(result, result === expected);
