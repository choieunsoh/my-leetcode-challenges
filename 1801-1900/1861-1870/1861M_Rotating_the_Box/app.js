// 1861. Rotating the Box
// https://leetcode.com/problems/rotating-the-box/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  return gravity(rotate(box));

  function gravity(box) {
    const STONE = '#';
    const OBSTACLE = '*';
    const m = box.length;
    const n = box[0].length;
    for (let col = 0; col < n; col++) {
      let minRow = m - 1;
      for (let row = m - 1; row >= 0; row--) {
        const cell = box[row][col];
        if (cell === STONE) {
          [box[row][col], box[minRow][col]] = [box[minRow][col], box[row][col]];
          minRow--;
        } else if (cell === OBSTACLE) {
          minRow = row - 1;
        }
      }
    }
    return box;
  }

  function rotate(box) {
    const m = box.length;
    const n = box[0].length;
    const result = Array.from({ length: n }, () => new Array(m));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        result[j][m - 1 - i] = box[i][j];
      }
    }
    return result;
  }
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
