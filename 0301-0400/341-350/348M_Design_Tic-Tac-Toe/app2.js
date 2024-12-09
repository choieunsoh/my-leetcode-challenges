// 348. Design Tic-Tac-Toe
// https://leetcode.com/problems/design-tic-tac-toe/description/
// T.C.: O(1)
// S.C.: O(n)
/**
 * @param {number} n
 */
var TicTacToe = function (n) {
  this.size = n;
  this.rows = new Array(n).fill(0);
  this.cols = new Array(n).fill(0);
  this.diagonal1 = 0;
  this.diagonal2 = 0;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
  // player 1 >> 1
  // player 2 >> -1
  const playerValue = player === 1 ? 1 : -1;
  if (row === col) {
    this.diagonal1 += playerValue;
  }
  if (row + col === this.size - 1) {
    this.diagonal2 += playerValue;
  }
  this.rows[row] += playerValue;
  this.cols[col] += playerValue;

  const target = player === 1 ? this.size : -this.size;
  if (
    this.diagonal1 === target ||
    this.diagonal2 === target ||
    this.rows[row] === target ||
    this.cols[col] === target
  ) {
    return player;
  }
  return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

function run(inputs, params, outputs) {
  var obj = null;
  for (let i = 0; i < inputs.length; i++) {
    const op = inputs[i];
    const args = params[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'TicTacToe':
        obj = new TicTacToe(...args);
        break;
      case 'move':
        result = obj.move(...args);
        break;
    }
    console.log(i, result, result === expected);
  }
  console.log(obj.rows);
  console.log(obj.cols);
  console.log(obj.diagonals);
}

var inputs = ['TicTacToe', 'move', 'move', 'move', 'move', 'move', 'move', 'move'],
  params = [[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]],
  outputs = [null, 0, 0, 0, 0, 0, 0, 1];
run(inputs, params, outputs);

var inputs = ['TicTacToe', 'move', 'move', 'move', 'move', 'move', 'move'],
  params = [[3], [0, 0, 1], [1, 1, 2], [2, 2, 1], [0, 2, 2], [0, 1, 1], [2, 0, 2]],
  outputs = [null, 0, 0, 0, 0, 0, 2];
run(inputs, params, outputs);
