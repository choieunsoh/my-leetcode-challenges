// 351. Android Unlock Patterns
// https://leetcode.com/problems/android-unlock-patterns/description/
// T.C.: O(9*8^n)
// S.C.: O(n)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function (m, n) {
  const SINGLE_STEP_MOVES = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, -2],
    [1, -2],
    [-1, 2],
    [1, 2],
  ];
  const SKIP_DOT_MOVES = [
    [0, 2],
    [0, -2],
    [2, 0],
    [-2, 0],
    [2, 2],
    [2, -2],
    [-2, 2],
    [-2, -2],
  ];

  let totalPatterns = 0;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const visited = Array.from({ length: 3 }, () => new Array(3).fill(false));
      totalPatterns += countPatternsFromDot(1, row, col, visited);
    }
  }

  return totalPatterns;

  function countPatternsFromDot(currentLength, row, col, visited) {
    if (currentLength > n) return 0;

    let validPatterns = 0;
    if (currentLength >= m) validPatterns++;
    visited[row][col] = true;

    for (const [i, j] of SINGLE_STEP_MOVES) {
      const [newRow, newCol] = [row + i, col + j];
      if (newRow < 0 || newRow >= 3 || newCol < 0 || newCol >= 3 || visited[newRow][newCol]) continue;
      validPatterns += countPatternsFromDot(currentLength + 1, newRow, newCol, visited);
    }

    for (const [i, j] of SKIP_DOT_MOVES) {
      const [newRow, newCol] = [row + i, col + j];
      if (newRow < 0 || newRow >= 3 || newCol < 0 || newCol >= 3 || visited[newRow][newCol]) continue;

      const [middleRow, middleCol] = [row + i / 2, col + j / 2];
      if (visited[middleRow][middleCol]) {
        validPatterns += countPatternsFromDot(currentLength + 1, newRow, newCol, visited);
      }
    }

    visited[row][col] = false;
    return validPatterns;
  }
};

var m = 1,
  n = 1;
var expected = 9;
var result = numberOfPatterns(m, n);
console.log(result, result === expected);

var m = 1,
  n = 2;
var expected = 65;
var result = numberOfPatterns(m, n);
console.log(result, result === expected);
