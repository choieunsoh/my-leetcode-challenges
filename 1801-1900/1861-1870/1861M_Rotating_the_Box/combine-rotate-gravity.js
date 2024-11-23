// 1861. Rotating the Box
// https://leetcode.com/problems/rotating-the-box/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  const STONE = '#';
  const OBSTACLE = '*';
  const EMPTY = '.';
  const m = box.length;
  const n = box[0].length;
  const result = Array.from({ length: n }, () => new Array(m).fill(EMPTY));

  // Apply gravity to let stones fall to the lowest possible empty cell in each column
  for (let i = 0; i < m; i++) {
    let lowestRowWithEmptyCell = n - 1;
    for (let j = n - 1; j >= 0; j--) {
      // Found a stone - let it fall to the lowest empty cell
      if (box[i][j] === STONE) {
        result[lowestRowWithEmptyCell][m - i - 1] = STONE;
        lowestRowWithEmptyCell--;
      }

      // Found an obstacle - reset `lowestRowWithEmptyCell` to the row directly above it
      if (box[i][j] === OBSTACLE) {
        // Place the obstacle in the correct position in the rotated grid
        result[j][m - i - 1] = OBSTACLE;
        lowestRowWithEmptyCell = j - 1;
      }
    }
  }
  return result;
};

var box = [['#', '.', '#']];
var expected = [['.'], ['#'], ['#']];
var result = rotateTheBox(box);
console.log(result, result.join() === expected.join());

var box = [
  ['#', '.', '*', '.'],
  ['#', '#', '*', '.'],
];
var expected = [
  ['#', '.'],
  ['#', '#'],
  ['*', '*'],
  ['.', '.'],
];
var result = rotateTheBox(box);
console.log(result, result.join() === expected.join());

var box = [
  ['#', '#', '*', '.', '*', '.'],
  ['#', '#', '#', '*', '.', '.'],
  ['#', '#', '#', '.', '#', '.'],
];
var expected = [
  ['.', '#', '#'],
  ['.', '#', '#'],
  ['#', '#', '*'],
  ['#', '*', '.'],
  ['#', '.', '*'],
  ['#', '.', '.'],
];
var result = rotateTheBox(box);
console.log(result, result.join() === expected.join());
