// 3548. Equal Sum Grid Partition II
// https://leetcode.com/problems/equal-sum-grid-partition-ii/description/
// T.C.: O(m*n)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let total = 0n;

  const bottomFreq = new Int32Array(100001);
  const topFreq = new Int32Array(100001);
  const rightFreq = new Int32Array(100001);
  const leftFreq = new Int32Array(100001);

  for (const row of grid) {
    for (const x of row) {
      total += BigInt(x);
      bottomFreq[x]++;
      rightFreq[x]++;
    }
  }

  let sumTop = 0n;
  for (let row = 0; row < rows - 1; row++) {
    for (let col = 0; col < cols; col++) {
      const val = grid[row][col];
      sumTop += BigInt(val);
      topFreq[val]++;
      bottomFreq[val]--;
    }

    const sumBottom = total - sumTop;
    if (sumTop === sumBottom) return true;

    const diff = sumTop > sumBottom ? sumTop - sumBottom : sumBottom - sumTop;
    if (diff <= 100000n) {
      const d = Number(diff);
      if (sumTop > sumBottom) {
        if (check(topFreq, 0, row, 0, cols - 1, d)) return true;
      } else {
        if (check(bottomFreq, row + 1, rows - 1, 0, cols - 1, d)) return true;
      }
    }
  }

  let sumLeft = 0n;
  for (let col = 0; col < cols - 1; col++) {
    for (let row = 0; row < rows; row++) {
      const val = grid[row][col];
      sumLeft += BigInt(val);
      leftFreq[val]++;
      rightFreq[val]--;
    }

    const sumRight = total - sumLeft;
    if (sumLeft === sumRight) return true;

    const diff = sumLeft > sumRight ? sumLeft - sumRight : sumRight - sumLeft;
    if (diff <= 100000n) {
      const d = Number(diff);
      if (sumLeft > sumRight) {
        if (check(leftFreq, 0, rows - 1, 0, col, d)) return true;
      } else {
        if (check(rightFreq, 0, rows - 1, col + 1, cols - 1, d)) return true;
      }
    }
  }

  return false;

  function check(freq, r1, r2, c1, c2, diff) {
    const rows = r2 - r1 + 1;
    const cols = c2 - c1 + 1;

    if (rows * cols === 1) return false;

    if (rows === 1) {
      return grid[r1][c1] === diff || grid[r1][c2] === diff;
    }

    if (cols === 1) {
      return grid[r1][c1] === diff || grid[r2][c1] === diff;
    }

    return freq[diff] > 0;
  }
};

var grid = [
  [1, 4],
  [2, 3],
];
var expected = true;
var result = canPartitionGrid(grid);
console.log(result, result === expected);

var grid = [
  [1, 2],
  [3, 4],
];
var expected = true;
var result = canPartitionGrid(grid);
console.log(result, result === expected);

var grid = [
  [1, 2, 4],
  [2, 3, 5],
];
var expected = false;
var result = canPartitionGrid(grid);
console.log(result, result === expected);

var grid = [
  [4, 1, 8],
  [3, 2, 6],
];
var expected = false;
var result = canPartitionGrid(grid);
console.log(result, result === expected);
