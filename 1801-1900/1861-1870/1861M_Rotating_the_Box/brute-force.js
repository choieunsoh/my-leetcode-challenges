// 1861. Rotating the Box
// https://leetcode.com/problems/rotating-the-box/description/
// T.C.: O(m*n^2)
// S.C.: O(m*n)
/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  const m = box.length;
  const n = box[0].length;
  const result = Array.from({ length: n }, () => new Array(m));

  // Create the transpose of the input grid in `result`
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[i][j] = box[j][i];
    }
  }

  // Reverse each row in the transpose grid to complete the 90° rotation
  for (let i = 0; i < n; i++) {
    reverse(result[i]);
  }

  // Apply gravity to let stones fall to the lowest possible empty cell in each column
  for (let j = 0; j < m; j++) {
    // Process each cell in column `j` from bottom to top
    for (let i = n - 1; i >= 0; i--) {
      if (result[i][j] === '.') {
        // Found an empty cell; check if a stone can fall into it
        let nextRowWithStone = -1;

        // Look for a stone directly above the empty cell `result[i][j]`
        for (let k = i - 1; k >= 0; k--) {
          if (result[k][j] === '*') break; // Obstacle blocks any stones above
          if (result[k][j] === '#') {
            // Stone found with no obstacles in between
            nextRowWithStone = k;
            break;
          }
        }

        // If a stone was found above, let it fall into the empty cell `result[i][j]`
        if (nextRowWithStone !== -1) {
          result[nextRowWithStone][j] = '.';
          result[i][j] = '#';
        }
      }
    }
  }
  return result;

  // Helper function to reverse an array
  function reverse(row) {
    let left = 0;
    let right = row.length - 1;
    while (left < right) {
      const temp = row[left];
      row[left] = row[right];
      row[right] = temp;
      left++;
      right--;
    }
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
