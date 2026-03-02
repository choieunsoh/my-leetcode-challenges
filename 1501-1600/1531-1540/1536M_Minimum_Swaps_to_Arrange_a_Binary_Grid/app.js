// 1536. Minimum Swaps to Arrange a Binary Grid
// https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function (grid) {
  const n = grid.length;
  let trailingZeros = new Array(n);
  for (let i = 0; i < n; ++i) {
    let counter = 0;
    for (let j = n - 1; j >= 0; --j) {
      if (grid[i][j] !== 0) break;
      counter++;
    }
    trailingZeros[i] = counter;
  }

  console.log(trailingZeros);
  let numNeeded = n - 1;
  let swaps = 0;
  while (numNeeded > 0) {
    let flag = false;
    for (let i = n - numNeeded - 1; i < n; ++i) {
      if (trailingZeros[i] >= numNeeded) {
        const temp = trailingZeros[i];
        for (let k = i; k > n - numNeeded - 1; --k) {
          trailingZeros[k] = trailingZeros[k - 1];
        }

        trailingZeros[n - numNeeded - 1] = temp;
        swaps += i - (n - numNeeded - 1);
        flag = true;
        break;
      }
    }

    if (!flag) return -1;

    numNeeded--;
  }
  return swaps;
};

var grid = [
  [0, 0, 1],
  [1, 1, 0],
  [1, 0, 0],
];
var expected = 3;
var result = minSwaps(grid);
console.log(result, result === expected);

var grid = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
];
var expected = -1;
var result = minSwaps(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 1],
];
var expected = 0;
var result = minSwaps(grid);
console.log(result, result === expected);
