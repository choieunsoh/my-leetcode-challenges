const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @param {number[]} limits
 * @param {number} k
 * @return {number}
 */
var maxSum = function (grid, limits, k) {
  const pq = new PriorityQueue({ compare: (a, b) => b[0] - a[0] });
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      pq.enqueue([grid[row][col], row]);
    }
  }

  let sum = 0;
  while (k > 0) {
    const [val, row] = pq.dequeue();
    if (limits[row] > 0) {
      sum += val;
      k--;
      limits[row]--;
    }
  }
  return sum;
};

var grid = [
    [1, 2],
    [3, 4],
  ],
  limits = [1, 2],
  k = 2;
var expected = 7;
var result = maxSum(grid, limits, k);
console.log(result, result === expected);

var grid = [
    [5, 3, 7],
    [8, 2, 6],
  ],
  limits = [2, 2],
  k = 3;
var expected = 21;
var result = maxSum(grid, limits, k);
console.log(result, result === expected);

var grid = [
    [7, 10, 3, 3, 7, 7, 0],
    [5, 5, 9, 2, 10, 5, 2],
  ],
  limits = [3, 7],
  k = 7;
var expected = 53;
var result = maxSum(grid, limits, k);
console.log(result, result === expected);
