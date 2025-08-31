// 37. Sudoku Solver
// https://leetcode.com/problems/sudoku-solver/
// T.C.: O(9^emptyCells)
// S.C.: O(1)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // Count empty cells to track remaining work
  let emptyCellCount = 0;

  // Bitmasks to track used numbers in each row, column, and 3x3 box
  const rowMasks = new Array(9).fill(0);
  const colMasks = new Array(9).fill(0);
  const boxMasks = new Array(9).fill(0);

  // Initialize bitmasks by scanning the board
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== '.') {
        const boxIndex = 3 * Math.floor(r / 3) + Math.floor(c / 3);

        on(rowMasks, r, Number(board[r][c] - 1));
        on(colMasks, c, Number(board[r][c] - 1));
        on(boxMasks, boxIndex, Number(board[r][c] - 1));
      } else {
        emptyCellCount++;
      }
    }
  }

  // Start the backtracking process
  backtrack(emptyCellCount);

  // Recursive backtracking function
  function backtrack(emptyCellCount) {
    // Base case: all cells filled
    if (emptyCellCount === 0) return true;

    // Find the empty cell with minimum possible values
    const [r, c] = findMin(board, rowMasks, colMasks, boxMasks);

    const boxIndex = 3 * Math.floor(r / 3) + Math.floor(c / 3);

    // Store original bitmask values for backtracking
    const originalRowMask = rowMasks[r],
      originalColMask = colMasks[c],
      originalBoxMask = boxMasks[boxIndex];

    // Get intersection of constraints
    const constraintMask = rowMasks[r] | colMasks[c] | boxMasks[boxIndex];

    // Try each possible number (1-9)
    for (let i = 0; i < 9; i++) {
      if (has(constraintMask, i)) {
        // Place the number
        board[r][c] = (i + 1).toString();

        // Update bitmasks
        on(rowMasks, r, i);
        on(colMasks, c, i);
        on(boxMasks, boxIndex, i);

        // Recurse with one less empty cell
        if (backtrack(emptyCellCount - 1)) return true;

        // Backtrack: remove the number and restore bitmasks
        board[r][c] = '.';
        rowMasks[r] = originalRowMask;
        colMasks[c] = originalColMask;
        boxMasks[boxIndex] = originalBoxMask;
      }
    }

    return false;
  }

  /**
   * Sets bit at position v in array element at index i
   *
   *  @param {Array} arr - The array of bitmasks
   *  @param {number} i - The index in the array to modify
   *  @param {number} v - The bit position to set (0-8 for
   *
   * @returns {void}
   */
  function on(arr, i, v) {
    return (arr[i] |= 1 << v);
  }

  /**
   * Checks if bit at position is NOT set (number is available)
   *
   * @param {number} val - The bitmask value to check
   * @param {number} bit - The bit position to check (0-8 for Sudoku)
   *
   * @returns {boolean} - True if the bit is NOT set, meaning the number is available
   *
   */
  function has(val, bit) {
    return (val & (1 << bit)) === 0;
  }

  /**
   * Finds empty cell with minimum possible values (MRV heuristic)
   *
   * @param {Array} board - The Sudoku board
   * @param {Array} rows - Bitmasks for each row
   * @param {Array} cols - Bitmasks for each column
   * @param {Array} boxes - Bitmasks for each 3x3 box
   *
   * @returns {Array} - Coordinates of the cell with minimum possibilities [row, col]
   */
  function findMin(board, rows, cols, boxes) {
    // Initialize variables to track the empty cell with minimum possible values
    let minRow = -1,
      minCol = -1,
      minPossibleCount = Infinity;

    // Search through all cells to find the one with fewest possibilities
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') {
          // Calculate box index for current cell
          const boxIndex = 3 * Math.floor(r / 3) + Math.floor(c / 3);
          let possibleCount = 0;

          // Get combined constraints from row, column, and box
          const combinedConstraints = rows[r] | cols[c] | boxes[boxIndex];

          // Count how many numbers are still possible for this cell
          for (let i = 0; i < 9; i++) if (has(combinedConstraints, i)) possibleCount++;

          // Update minimum if this cell has fewer possibilities
          if (possibleCount < minPossibleCount) {
            minPossibleCount = possibleCount;
            minRow = r;
            minCol = c;
          }
        }
      }
    }

    return [minRow, minCol];
  }
};

var board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
var expected = [
  ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
  ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
  ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
  ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
  ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
  ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
  ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
  ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
  ['3', '4', '5', '2', '8', '6', '1', '7', '9'],
];

function print(board) {
  console.log(board.map((row) => row.join()).join('\n'));
}

solveSudoku(board);
print(board);
console.log(board.join() === expected.join());

var board = [
  ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
  ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
  ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
  ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
  ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
  ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
];
solveSudoku(board);
print(board);
