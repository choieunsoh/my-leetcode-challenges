// 302. Smallest Rectangle Enclosing Black Pixels
// https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/description/
// T.C.: O(m * n)
// S.C.: O(1)
/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function (image, x, y) {
  const rows = image.length;
  const cols = image[0].length;
  let top = rows;
  let bottom = 0;
  let left = cols;
  let right = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (image[row][col] === '1') {
        top = Math.min(top, row);
        bottom = Math.max(bottom, row);
        left = Math.min(left, col);
        right = Math.max(right, col);
      }
    }
  }

  return (bottom - top + 1) * (right - left + 1);
};

var image = [
    ['0', '0', '1', '0'],
    ['0', '1', '1', '0'],
    ['0', '1', '0', '0'],
  ],
  x = 0, // row
  y = 2; // col
var expected = 6;
var result = minArea(image, x, y);
console.log(result, result === expected);

var image = [['1']],
  x = 0,
  y = 0;
var expected = 1;
var result = minArea(image, x, y);
console.log(result, result === expected);
