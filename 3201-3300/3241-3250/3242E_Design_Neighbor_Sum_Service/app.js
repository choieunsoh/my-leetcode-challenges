// 3242. Design Neighbor Sum Service
// https://leetcode.com/problems/design-neighbor-sum-service/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
  const n = grid.length;
  const map = new Array(n * n);
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      const value = grid[row][col];
      map[value] = [row, col];
    }
  }
  this.n = n;
  this.grid = grid;
  this.map = map;
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
  const { n, grid, map } = this;
  const [row, col] = map[value];
  let sum = 0;
  if (row - 1 >= 0) sum += grid[row - 1][col];
  if (row + 1 < n) sum += grid[row + 1][col];
  if (col - 1 >= 0) sum += grid[row][col - 1];
  if (col + 1 < n) sum += grid[row][col + 1];
  return sum;
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
  const { n, grid, map } = this;
  const [row, col] = map[value];
  let sum = 0;
  if (row - 1 >= 0 && col - 1 >= 0) sum += grid[row - 1][col - 1];
  if (row + 1 < n && col + 1 < n) sum += grid[row + 1][col + 1];
  if (row + 1 < n && col - 1 >= 0) sum += grid[row + 1][col - 1];
  if (row - 1 >= 0 && col + 1 < n) sum += grid[row - 1][col + 1];
  return sum;
};

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i][0];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'NeighborSum':
        obj = new NeighborSum(input);
        break;
      case 'adjacentSum':
        result = obj.adjacentSum(input);
        break;
      case 'diagonalSum':
        result = obj.diagonalSum(input);
        break;
      default:
        break;
    }
    console.log(i, op, input, expected, result, expected === result);
  }
}

var ops = ['NeighborSum', 'adjacentSum', 'adjacentSum', 'diagonalSum', 'diagonalSum'];
var inputs = [
  [
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
  ],
  [1],
  [4],
  [4],
  [8],
];
var outputs = [null, 6, 16, 16, 4];
run(ops, inputs, outputs);

var ops = ['NeighborSum', 'adjacentSum', 'diagonalSum'];
var inputs = [
  [
    [
      [1, 2, 0, 3],
      [4, 7, 15, 6],
      [8, 9, 10, 11],
      [12, 13, 14, 5],
    ],
  ],
  [15],
  [9],
];
var outputs = [null, 23, 45];
run(ops, inputs, outputs);
