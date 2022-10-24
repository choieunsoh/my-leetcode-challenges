// https://leetcode.com/problems/sudoku-solver/
// 37. Sudoku Solver
var solveSudokuTS = function (board: string[][]): void {
  const rows = new Map<number, Set<number>>();
  const cols = new Map<number, Set<number>>();
  const boxes = new Map<number, Set<number>>();
  for (let i = 0; i < 9; i++) {
    rows.set(i, new Set());
    cols.set(i, new Set());
    boxes.set(i, new Set());
  }

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== '.') {
        const num = +board[row][col];
        const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        rows.get(row)?.add(num);
        cols.get(col)?.add(num);
        boxes.get(box)?.add(num);
      }
    }
  }

  solve();

  function getPosition(index: number): number[] {
    const row = Math.floor(index / 9);
    const col = index % 9;
    const box = 3 * Math.floor(row / 3) + Math.floor(col / 3);
    return [row, col, box];
  }

  function solve(index = 0): boolean {
    if (index === 81) return true;

    const [row, col, box] = getPosition(index);
    if (board[row][col] !== '.') {
      return solve(index + 1);
    }

    for (let num = 1; num <= 9; num++) {
      if (!canPlaceNumber(row, col, box, num)) continue;

      placeNumber(row, col, box, num);
      if (solve(index + 1)) return true;
      removeNumber(row, col, box, num);
    }

    return false;
  }

  function canPlaceNumber(
    row: number,
    col: number,
    box: number,
    num: number
  ): boolean {
    if (rows.get(row)?.has(num)) return false;
    if (cols.get(col)?.has(num)) return false;
    if (boxes.get(box)?.has(num)) return false;
    return true;
  }

  function placeNumber(
    row: number,
    col: number,
    box: number,
    num: number
  ): void {
    rows.get(row)?.add(num);
    cols.get(col)?.add(num);
    boxes.get(box)?.add(num);
    board[row][col] = num.toString();
  }

  function removeNumber(
    row: number,
    col: number,
    box: number,
    num: number
  ): void {
    rows.get(row)?.delete(num);
    cols.get(col)?.delete(num);
    boxes.get(box)?.delete(num);
    board[row][col] = '.';
  }
};

var printSudoku = function (board: string[][]): void {
  console.log(board.map((row) => row.join()).join('\n'));
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
solveSudokuTS(board);
printSudoku(board);
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
solveSudokuTS(board);
printSudoku(board);
