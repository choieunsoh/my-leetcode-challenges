// 302. Smallest Rectangle Enclosing Black Pixels
// https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/description/
// T.C.: O(m log n * n log m)
// S.C.: O(1)
/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function (image, x, y) {
  const m = image.length;
  const n = image[0].length;

  const left = searchColumns(image, 0, y, 0, m, true);
  const right = searchColumns(image, y + 1, n, 0, m, false);
  const top = searchRows(image, 0, x, left, right, true);
  const bottom = searchRows(image, x + 1, m, left, right, false);

  return (right - left) * (bottom - top);

  function searchColumns(image, i, j, top, bottom, whiteToBlack) {
    while (i !== j) {
      const mid = Math.floor((i + j) / 2);
      let k = top;
      while (k < bottom && image[k][mid] === '0') {
        k++;
      }
      if (k < bottom === whiteToBlack) {
        j = mid;
      } else {
        i = mid + 1;
      }
    }
    return i;
  }

  function searchRows(image, i, j, left, right, whiteToBlack) {
    while (i !== j) {
      const mid = Math.floor((i + j) / 2);
      let k = left;
      while (k < right && image[mid][k] === '0') {
        k++;
      }
      if (k < right === whiteToBlack) {
        j = mid;
      } else {
        i = mid + 1;
      }
    }
    return i;
  }
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
