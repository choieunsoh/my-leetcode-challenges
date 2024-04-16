// 348. Design Tic-Tac-Toe
// https://leetcode.com/problems/design-tic-tac-toe/description/
// T.C.: O(1)
// S.C.: O(n)
/**
 * @param {number} n
 */
var TicTacToe = function (n) {
  this.n = n;
  this.rows = new Map();
  this.cols = new Map();
  this.diagonals = new Map();
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
  const { rows, cols, diagonals, n } = this;
  if (this._place(rows, row, player)) return player;
  if (this._place(cols, col, player)) return player;
  if (row === col && this._place(diagonals, 0, player)) return player;
  if (row + col === n - 1 && this._place(diagonals, 1, player)) return player;

  return 0;
};

TicTacToe.prototype._place = function (map, index, player) {
  // player 1 >> 1
  // player 2 >> -1
  const playerValue = player === 1 ? 1 : -1;
  if (!map.has(index)) {
    map.set(index, playerValue);
    return;
  }

  const currValue = map.get(index) ?? 0;
  const nextValue = currValue + playerValue;
  map.set(index, nextValue);
  if (Math.abs(nextValue) === this.n) return player;
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
